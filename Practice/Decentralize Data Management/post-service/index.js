
const express = require('express');
const { MongoClient } = require('mongodb');
const fetch = require('node-fetch');
const eventBus = require('../event-bus');

// --- Circuit Breaker Implementation ---
class CircuitBreaker {
  constructor(timeout = 5000) {
    this.failureCount = 0;
    this.timeout = timeout;
    this.lastFailureTime = null;
    this.maxFailures = 3;
  }

  async call(serviceCall) {
    if (this.isOpen()) {
      const timePassed = Date.now() - this.lastFailureTime;
      if (timePassed > this.timeout) {
        // Half-open: test
        return this.testCall(serviceCall);
      } else {
        throw new Error('User Service is down (circuit open)');
      }
    }
    try {
      const result = await serviceCall();
      this.failureCount = 0; // Reset
      return result;
    } catch (err) {
      this.failureCount++;
      this.lastFailureTime = Date.now();
      if (this.failureCount >= this.maxFailures) {
        console.log('🚨 Circuit opened for User Service');
      }
      throw err;
    }
  }

  isOpen() {
    return this.failureCount >= this.maxFailures &&
           (Date.now() - this.lastFailureTime) < this.timeout;
  }

  async testCall(serviceCall) {
    console.log('🔧 Testing User Service...');
    try {
      const result = await serviceCall();
      this.failureCount = 0;
      console.log('✅ Circuit closed for User Service');
      return result;
    } catch (err) {
      // Still failing — keep open
      throw err;
    }
  }
}

const userServiceBreaker = new CircuitBreaker(5000);

const app = express();
app.use(express.json());

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'postsdb';
let db;

MongoClient.connect(mongoUrl, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log('✅ Post Service connected to MongoDB');
  })
  .catch(err => console.error(err));

// CREATE post
app.post('/posts', async (req, res) => {
  const { userId, content } = req.body;
  let user = null;
  let userName = 'Unknown';
  try {
    // --- Timeout and Retry Logic ---
    async function fetchUserWithTimeout() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 sec
      try {
        const userRes = await fetch(`http://localhost:3001/users/${userId}`, {
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (userRes.status === 200) {
          return await userRes.json();
        } else {
          throw new Error('User not found');
        }
      } catch (err) {
        clearTimeout(timeoutId);
        throw err;
      }
    }

    // --- Retry with Exponential Backoff ---
    async function callWithRetry(maxRetries = 3) {
      let lastError;
      for (let i = 0; i <= maxRetries; i++) {
        try {
          return await fetchUserWithTimeout();
        } catch (err) {
          lastError = err;
          if (i < maxRetries) {
            const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s
            await new Promise(r => setTimeout(r, delay));
            console.log(`Retry ${i + 1} after ${delay}ms`);
          }
        }
      }
      throw lastError;
    }

    // --- Circuit Breaker ---
    user = await userServiceBreaker.call(() => callWithRetry(2));
    userName = user.name;
  } catch (err) {
    // --- Fallback ---
    console.error('User Service failure:', err.message);
    userName = 'Unknown';
  }

  try {
    const post = { userId, content, createdAt: new Date() };
    const result = await db.collection('posts').insertOne(post);

    // Emit event with fallback userName if needed
    eventBus.emit('PostCreated', {
      postId: result.insertedId,
      userId,
      userName,
      content,
      createdAt: post.createdAt
    });

    res.status(201).send('Post created');
  } catch (err) {
    console.error('Post creation failure:', err.message);
    res.status(500).send('Server error');
  }
});

app.listen(3002, () => console.log('📝 Post Service running on port 3002'));
