var Device = require('../models/device');

// List all devices
exports.device_list = async function(req, res) {
  try {
    const devices = await Device.find().exec();
    res.json(devices);
  } catch (err) {
    console.error('Error fetching devices:', err);
    res.status(500).json({"error": `${err.message}`});
  }
};

// Detail for a specific device
exports.device_detail = async function(req, res) {
  try {
    if (!req.params.id) {
      return res.status(400).send('Device ID is required');
    }

    const device = await Device.findById(req.params.id).exec();
    if (device) {
      res.json(device);
    } else {
      res.status(404).send('Device not found');
    }
  } catch (err) {
    console.error('Error fetching device details:', err);
    res.status(500).json({"error": `${err.message}`});
  }
};

// Handle device creation on POST
exports.device_create_post = async function(req, res) {
  console.log(req.body);

  let device = new Device({
    device_name: req.body.device_name,
    model: req.body.model,
    power: req.body.power
  });

  try {
    let result = await device.save();
    res.status(201).json(result);
  } catch (err) {
    console.error('Error creating device:', err);
    res.status(500).json({"error": `${err.message}`});
  }
};

// Handle device delete on DELETE
exports.device_delete = function(req, res) {
  res.send('Device delete DELETE not implemented');
};

// Handle device update on PUT
exports.device_update_put = function(req, res) {
  res.send('Device update PUT not implemented');
};
