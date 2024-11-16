import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListingDetails = () => {
  const { id } = useParams(); // Extract the listing ID from the URL
  const [listing, setListing] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/listings/${id}`) // Fetch listing details
      .then((response) => {
        setListing(response.data);
      })
      .catch((error) => {
        console.error('Error fetching listing details:', error);
      });
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="listing-details">
      <img src={listing.imageUrl} alt={listing.title} />
      <h3>{listing.title}</h3>
      <p>{listing.type}</p>
      <p>
        {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms
      </p>
      <p>${listing.price} per night</p>
      <p>{listing.description}</p>

      {/* Link to Booking Page */}
      <Link to={`/book/${listing.id}`}>
        <button>Book Now</button>
      </Link>
    </div>
  );
};

export default ListingDetails;
