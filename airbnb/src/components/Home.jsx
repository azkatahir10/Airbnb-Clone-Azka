import { useState, useEffect } from 'react'; // Import necessary hooks
import '../scss/Home.scss'; // Your SCSS file for styling

const Home = () => {
  const [listings, setListings] = useState([]); // Initialize state to hold listings

  useEffect(() => {
    // Function to fetch listings from the backend
    const fetchListings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/listings'); // Your API endpoint
        const data = await response.json(); // Parse the response as JSON
        setListings(data); // Update state with fetched listings
      } catch (error) {
        console.error('Error fetching listings:', error); // Error handling
      }
    };

    fetchListings(); // Call the function to fetch data when component mounts
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div>
      <h1>Our Listings</h1>
      <div className="listing-cards">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <div key={listing.id} className="listing-card">
              <h2>{listing.title}</h2>
              <p>{listing.type}</p>
              <p>{listing.price}</p>
              <img src={listing.images[0]} alt={listing.title} />
            </div>
          ))
        ) : (
          <p>No listings found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
