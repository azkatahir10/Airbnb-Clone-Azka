const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins (allowing frontend and backend to communicate)
app.use(cors());

// Mock data for listings
const listings = [
  {
    id: 1,
    title: 'Beach House',
    type: 'Entire home',
    price: '$200/night',
    description: 'A beautiful beach house with ocean views.',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    images: ['./card-img.jpg'],
  },
  {
    id: 2,
    title: 'Mountain Cabin',
    type: 'Private room',
    price: '$100/night',
    description: 'A cozy cabin in the mountains.',
    amenities: ['WiFi', 'Kitchen', 'Fireplace'],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    images: ['./card-img.jpg'],
  },
  {
    id: 1,
    title: 'Beach House',
    type: 'Entire home',
    price: '$200/night',
    description: 'A beautiful beach house with ocean views.',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    images: ['./card-img.jpg'],
  },
  {
    id: 2,
    title: 'Mountain Cabin',
    type: 'Private room',
    price: '$100/night',
    description: 'A cozy cabin in the mountains.',
    amenities: ['WiFi', 'Kitchen', 'Fireplace'],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    images: ['./card-img.jpg'],
  },
  {
    id: 1,
    title: 'Beach House',
    type: 'Entire home',
    price: '$200/night',
    description: 'A beautiful beach house with ocean views.',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    images: ['./card-img.jpg'],
  },
  {
    id: 2,
    title: 'Mountain Cabin',
    type: 'Private room',
    price: '$100/night',
    description: 'A cozy cabin in the mountains.',
    amenities: ['WiFi', 'Kitchen', 'Fireplace'],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    images: ['./card-img.jpg'],
  },
  {
    id: 1,
    title: 'Beach House',
    type: 'Entire home',
    price: '$200/night',
    description: 'A beautiful beach house with ocean views.',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    images: ['./card-img.jpg'],
  },
  {
    id: 2,
    title: 'Mountain Cabin',
    type: 'Private room',
    price: '$100/night',
    description: 'A cozy cabin in the mountains.',
    amenities: ['WiFi', 'Kitchen', 'Fireplace'],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    images: ['./card-img.jpg'],
  },
  {
    id: 1,
    title: 'Beach House',
    type: 'Entire home',
    price: '$200/night',
    description: 'A beautiful beach house with ocean views.',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    images: ['./card-img.jpg'],
  },
  {
    id: 2,
    title: 'Mountain Cabin',
    type: 'Private room',
    price: '$100/night',
    description: 'A cozy cabin in the mountains.',
    amenities: ['WiFi', 'Kitchen', 'Fireplace'],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    images: ['./card-img.jpg'],
  },
  {
    id: 1,
    title: 'Beach House',
    type: 'Entire home',
    price: '$200/night',
    description: 'A beautiful beach house with ocean views.',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    images: ['./card-img.jpg'],
  },
  {
    id: 2,
    title: 'Mountain Cabin',
    type: 'Private room',
    price: '$100/night',
    description: 'A cozy cabin in the mountains.',
    amenities: ['WiFi', 'Kitchen', 'Fireplace'],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    images: ['./card-img.jpg'],
  },
  // Add more listings as needed
];

// Route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Airbnb API');
});

// Route to get all listings
app.get('/api/listings', (req, res) => {
  res.json(listings);
});

// Route to get a specific listing by ID
app.get('/api/listings/:id', (req, res) => {
  const listingId = parseInt(req.params.id, 10);
  const listing = listings.find((listing) => listing.id === listingId);
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ message: 'Listing not found' });
  }
});

// Route for search functionality (filter by location or title)
app.get('/api/listings/search', (req, res) => {
  const query = req.query.query.toLowerCase();
  const filteredListings = listings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(query) ||
      listing.description.toLowerCase().includes(query)
  );
  res.json(filteredListings);
});

// Route for booking a listing (mock route)
app.post('/api/bookings', (req, res) => {
  // Here we would handle booking logic (e.g., storing in a database)
  res.json({ message: 'Booking successful!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
