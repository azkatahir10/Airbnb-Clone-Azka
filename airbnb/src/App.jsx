import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your CSS for styling

// Components
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import ListingDetails from './components/ListingDetails'; // New component for listing details
import BookingPage from './components/BookingPage'; // New component for booking

function App() {
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch the listings from the backend API
    const fetchListings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/listings');
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []); // Empty dependency array to run once when the component mounts

  const handleSearch = async () => {
    if (searchQuery) {
      const response = await fetch(
        `http://localhost:5000/api/listings/search?query=${searchQuery}`
      );
      const data = await response.json();
      setListings(data);
    } else {
      // If search query is empty, reset listings to all listings
      const response = await fetch('http://localhost:5000/api/listings');
      const data = await response.json();
      setListings(data);
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Always render the Navbar and Footer */}
        <Navbar />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        <Categories />

        {/* Define routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div className="listing-cards">
                {listings.length > 0 ? (
                  listings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))
                ) : (
                  <p>No listings found</p>
                )}
              </div>
            }
          />
          {/* Listing Details Route */}
          <Route path="/listings/:id" element={<ListingDetails />} />
          {/* Booking Page Route */}
          <Route path="/book/:id" element={<BookingPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
