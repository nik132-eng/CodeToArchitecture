
const express = require('express');
const { MongoClient } = require('mongodb');
const fetch = require('node-fetch');
const eventBus = require('../event-bus');

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
  try {
    const userRes = await fetch(`http://localhost:3001/users/${userId}`);
    if (userRes.status !== 200) return res.status(400).send('Invalid user');

    const user = await userRes.json();
    const post = { userId, content, createdAt: new Date() };
    const result = await db.collection('posts').insertOne(post);

    // ✅ Emit event
    eventBus.emit('PostCreated', {
      postId: result.insertedId,
      userId,
      userName: user.name,
      content,
      createdAt: post.createdAt
    });

    res.status(201).send('Post created');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(3002, () => console.log('📝 Post Service running on port 3002'));
