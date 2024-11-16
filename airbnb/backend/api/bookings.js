const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// Dummy Booking Endpoint
app.post('/api/bookings', (req, res) => {
  const bookingData = req.body; // Access booking data from request body

  console.log('Booking received:', bookingData); // Log the booking data
  res.status(200).json({ message: 'Booking received!', bookingData });
});

// Other routes and server setup...
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
