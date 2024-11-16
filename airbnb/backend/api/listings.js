// backend/api/listings.js

const express = require('express');
const router = express.Router();
const listings = require('../data/listings.json');

// Fetch all listings
router.get('/', (req, res) => {
  res.json(listings);
});

// Fetch a specific listing by ID
router.get('/:id', (req, res) => {
  const listingId = parseInt(req.params.id);
  const listing = listings.find(item => item.id === listingId);
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ message: "Listing not found" });
  }
});

// Search listings by location
router.get('/search', (req, res) => {
  const query = req.query.query?.toLowerCase() || "";
  const results = listings.filter(item =>
    item.location.toLowerCase().includes(query)
  );
  res.json(results);
});

module.exports = router;
