import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  email: String,
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

export default Certificate;
