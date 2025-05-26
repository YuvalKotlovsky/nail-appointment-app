const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  clientName: { type: String, required: true },           // שם הלקוח
  clientPhone: { type: String, required: true },          // טלפון ליצירת קשר
  date: { type: Date, required: true },                   // תאריך ושעת התור
  service: { type: String, required: true },              // סוג השירות (לק, בניית ציפורניים וכו')
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },  // סטטוס התור
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
