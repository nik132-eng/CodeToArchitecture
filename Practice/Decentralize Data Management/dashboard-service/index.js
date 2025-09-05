const express = require('express');
const { Pool } = require('pg');
const eventBus = require('../../event-bus');

const app = express();
app.use(express.json());

// This DB holds the materialized view
const dashboardPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dashboarddb',  // Create this DB
  password: 'password',
  port: 5432,
});

// Create table on startup
async function init() {
  const client = await dashboardPool.connect();
  await client.query(`
    CREATE TABLE IF NOT EXISTS user_posts_view (
      id SERIAL PRIMARY KEY,
      post_id TEXT,
      user_id INTEGER,
      user_name TEXT,
      content TEXT,
      created_at TIMESTAMP
    )
  `);
  client.release();
  console.log('📊 Dashboard DB initialized');
}

init();

// Listen to events and update view
eventBus.on('UserCreated', (user) => {
  console.log(`👤 UserCreated: ${user.name}`);
  // You could update user cache if needed
});

eventBus.on('PostCreated', async (event) => {
  console.log(`📝 PostCreated: ${event.content} by ${event.userName}`);
  const client = await dashboardPool.connect();
  try {
    await client.query(
      `INSERT INTO user_posts_view 
       (post_id, user_id, user_name, content, created_at) 
       VALUES ($1, $2, $3, $4, $5)`,
      [event.postId.toString(), event.userId, event.userName, event.content, event.createdAt]
    );
  } catch (err) {
    console.error('❌ Failed to update view:', err);
  } finally {
    client.release();
  }
});

// QUERY endpoint: Get all posts with user names (fast!)
app.get('/feed', async (req, res) => {
  try {
    const result = await dashboardPool.query(
      'SELECT user_name, content, created_at FROM user_posts_view ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Query failed');
  }
});

app.listen(3003, () => console.log('📈 Dashboard Service running on port 3003'));
