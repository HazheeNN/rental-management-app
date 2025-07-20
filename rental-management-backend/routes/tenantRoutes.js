// /routes/tenants.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all tenants
router.get('/', async (req, res) => {
  try {
    const [tenants] = await pool.query(`
      SELECT t.*, h.name AS house_name 
      FROM tenant t
      JOIN house h ON t.house_id = h.house_id
      WHERE t.deleted_at IS NULL
    `);
    res.json(tenants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
