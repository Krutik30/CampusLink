const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  eventName: String,
  eventDate: Date,
  eventPlace: String,
  eventType: String,
  mainActivity: String,
  certificateFile: {
    data: Buffer,
    contentType: String
  }
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
