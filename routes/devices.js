// routes/devices.js

var express = require('express');
var router = express.Router();
var Device = require('../models/device'); // Correct model import

/* GET devices page - List all devices */
router.get('/', async function(req, res, next) {
  try {
    // Fetch all devices from MongoDB
    const devices = await Device.find();
    // Render the devices.pug page and pass the devices data
    res.render('devices', { title: 'Devices List', results: devices }); // Pass data to pug view
  } catch (err) {
    console.error('Error fetching devices:', err);
    res.status(500).send('Error fetching devices');
  }
});

module.exports = router;
