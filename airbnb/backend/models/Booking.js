const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // References the User model
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true }, // References the Listing model
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model('Booking', BookingSchema);
