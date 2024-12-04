const mongoose = require('mongoose');

// Define the schema for the device
const deviceSchema = new mongoose.Schema({
  device_name: { type: String, required: true, minlength:[2], },
  model: { type: String, required: true, minlength:[3], },
  power_usage: { type: Number, min:[350,"power usage should be greater than 350"],}
});

// Create and export the Device model
const Device = mongoose.model('Device', deviceSchema);
module.exports = Device;
