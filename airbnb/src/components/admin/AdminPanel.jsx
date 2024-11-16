import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [listings, setListings] = useState([]);
  const [newListing, setNewListing] = useState({});
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem('token');

  const fetchListings = async () => {
    try {
      const response = await axios.get('/api/admin/listings', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setListings(response.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get('/api/admin/bookings', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleAddListing = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/listings', newListing, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setListings([...listings, response.data]);
    } catch (error) {
      console.error('Error adding listing:', error);
    }
  };

  const handleDeleteListing = async (id) => {
    try {
      await axios.delete(`/api/admin/listings/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setListings(listings.filter((listing) => listing._id !== id));
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  useEffect(() => {
    fetchListings();
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Listings</h2>
      <form onSubmit={handleAddListing}>
        <input type="text" placeholder="Title" onChange={(e) => setNewListing({ ...newListing, title: e.target.value })} />
        {/* Add inputs for other fields as required */}
        <button type="submit">Add Listing</button>
      </form>
      <ul>
        {listings.map((listing) => (
          <li key={listing._id}>
            {listing.title} <button onClick={() => handleDeleteListing(listing._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            {booking.user.name} booked {booking.listing.title} on {new Date(booking.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
