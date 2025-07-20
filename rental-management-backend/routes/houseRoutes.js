// /routes/houses.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all houses
router.get('/', async (req, res) => {
  try {
const [houses] = await pool.query('SELECT * FROM house');
    res.json(houses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
