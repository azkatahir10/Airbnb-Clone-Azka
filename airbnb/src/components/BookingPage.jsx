import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const { id } = useParams();
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = () => {
    const bookingData = {
      listingId: id,
      checkInDate,
      checkOutDate,
    };

    axios.post('http://localhost:5000/api/bookings', bookingData)
      .then(response => {
        setBookingConfirmed(true);
      })
      .catch(error => {
        console.error('Error making booking:', error);
      });
  };

  return (
    <div className="booking-page">
      <h3>Booking Page</h3>
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        placeholder="Check-in Date"
      />
      <input
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
        placeholder="Check-out Date"
      />
      <button onClick={handleBooking}>Book Now</button>

      {bookingConfirmed && <p>Booking Confirmed!</p>}
    </div>
  );
};

export default BookingPage;
