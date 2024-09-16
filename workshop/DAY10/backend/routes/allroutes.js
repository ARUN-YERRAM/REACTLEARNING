const express = require('express');
const router = express.Router();
const { Model1, Model2 } = require('../models/allschemas');

// Define your routes here
router.get('/example', async (req, res) => {
  try {
    const data = await Model1.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
