const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true }, // e.g., 'Entire home', 'Private room'
  pricePerNight: { type: Number, required: true },
  amenities: [String],
  guests: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // References the User model
});

module.exports = mongoose.model('Listing', ListingSchema);
