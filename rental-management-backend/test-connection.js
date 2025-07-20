// test-connection.js
const pool = require('./db');

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL database using connection pool');
    connection.release(); // Always release the connection back to the pool
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
}

testConnection();
