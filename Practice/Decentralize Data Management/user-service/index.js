const express = require('express');
const { Pool } = require('pg');
const app = express();
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'usersdb',
  password: 'password',
  port: 5432,
});

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).send('User not found');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.listen(3001, () => console.log('User Service running on port 3001'));
