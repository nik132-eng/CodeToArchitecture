
const express = require('express');
const { MongoClient } = require('mongodb');
const fetch = require('node-fetch');
const circuitBreaker = require('opossum');
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
    console.log('✅ Post Service: Connected to MongoDB');
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

// --- 2. Define the call to User Service ---
let getUser = async (userId) => {
  const res = await fetch(`http://localhost:3001/users/${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) {
    throw new Error(`User Service responded with ${res.status}`);
  }
  return await res.json();
};

// --- 3. Wrap with Circuit Breaker ---
const options = {
  timeout: 2000,                    // Fail if >2s
  errorThresholdPercentage: 50,     // Open circuit if >50% failures
  resetTimeout: 30000,              // Try again after 30s
  fallbackTimeout: 5000             // Give fallback 5s to respond
};
const breaker = new circuitBreaker(getUser, options);

// --- 4. Add Fallback ---
breaker.fallback((userId) => {
  console.log(`🛡️ Fallback: User Service down. Using default name for userId=${userId}`);
  return { id: userId, name: 'Unknown', email: 'unknown@fallback.com' };
});

// --- 5. Add Event Listeners (for visibility) ---
breaker.on('call', () => console.log('🟢 Calling User Service...'));
breaker.on('timeout', () => console.log('⏰ getUser timed out'));
breaker.on('reject', () => console.log('🚫 Request rejected (too many in-flight)'));
breaker.on('open', () => console.log('🔴 Circuit OPENED - stopping calls to User Service'));
breaker.on('halfOpen', () => console.log('🔧 Circuit HALF-OPEN - testing recovery'));
breaker.on('close', () => console.log('✅ Circuit CLOSED - calls resumed'));
breaker.on('failure', (err) => console.log('❌ getUser failed:', err.message));

// In-memory store for idempotency keys (use Redis in production)
const idempotencyStore = new Map();

// CREATE post
app.post('/posts', async (req, res) => {
  const { userId, content, idempotencyKey } = req.body;

  // --- 1. Idempotency Check ---
  if (!idempotencyKey) {
    return res.status(400).json({ error: 'Missing idempotencyKey' });
  }
  if (idempotencyStore.has(idempotencyKey)) {
    const cached = idempotencyStore.get(idempotencyKey);
    console.log(`🔁 Idempotency hit: returning cached response for key=${idempotencyKey}`);
    return res.status(cached.status).json(cached.body);
  }

  // --- 2. Validate User (via Circuit Breaker) ---
  let user;
  try {
    user = await breaker.fire(userId); // This uses the circuit breaker
  } catch (err) {
    console.log('💥 Failed to get user:', err.message);
    return res.status(503).json({
      error: 'User service unavailable',
      message: 'Your post will be processed later.'
    });
  }

  // --- 3. Create Post ---
  const post = {
    userId,
    content,
    userName: user.name,
    createdAt: new Date()
  };

  try {
    const result = await db.collection('posts').insertOne(post);
    // --- 4. Cache idempotency result ---
    const response = {
      status: 201,
      body: { id: result.insertedId, message: 'Post created' }
    };
    idempotencyStore.set(idempotencyKey, response);
    res.status(201).json(response.body);
  } catch (err) {
    console.error('❌ DB error:', err);
    res.status(500).json({ error: 'Failed to save post' });
  }
});

// For testing: simulate User Service failure
app.get('/simulate-failure', (req, res) => {
  getUser = () => {
    return new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Simulated failure')), 2500)
    );
  };
  console.log('🎯 Simulated failure activated in getUser');
  res.send('💥 Simulated User Service failure (next calls will timeout)');
});

// Reset to normal
app.get('/reset-failure', (req, res) => {
  getUser = async (userId) => {
    const res = await fetch(`http://localhost:3001/users/${userId}`);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    return await res.json();
  };
  console.log('✅ getUser restored to normal');
  res.send('🔁 getUser restored');
});

app.listen(3002, () => console.log('📝 Post Service running on port 3002'));
