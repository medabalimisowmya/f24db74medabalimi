var express = require('express');
var router = express.Router();
var Device = require('../models/device'); // Make sure the path to the model is correct

/* GET devices page. */
router.get('/', async function(req, res, next) {
  try {
    // Fetch all devices from MongoDB
    const devices = await Device.find();

    // Render the devices.pug page and pass the devices data
    res.render('devices', { title: 'Search Results for Devices', results: devices });
  } catch (err) {
    console.error('Error fetching devices:', err);
    res.status(500).send('Error fetching devices');
  }
});

module.exports = router;
