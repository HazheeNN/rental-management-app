// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const houseRoutes = require('./routes/houseRoutes');
const tenantRoutes = require('./routes/tenantRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root test route
app.get('/api/test', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    res.send('✅ Connected to MySQL');
  } catch (err) {
    res.status(500).send('❌ Connection failed');
  }
});

// Use route files
app.use('/api/houses', houseRoutes);
app.use('/api/tenants', tenantRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
