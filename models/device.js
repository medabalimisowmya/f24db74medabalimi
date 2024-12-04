const mongoose = require('mongoose');

// Define the schema for the device
const deviceSchema = new mongoose.Schema({
  device_name: { type: String, required: true ,minlength:[20,"min value should be greater than 20 "]},
  model: { type: String, required: true,minglength:[30,"min value should be greater than 30"] },
  power_usage: { type: Number, required: true, min:[350,"power usage should be greater than 350"] }
});

// Create and export the Device model
const Device = mongoose.model('Device', deviceSchema);
module.exports = Device;
