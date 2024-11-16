import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <img src={listing.imageUrl} alt={listing.title} />
      <h2>{listing.title}</h2>
      <p>${listing.price} per night</p>
      <Link to={`/listings/${listing.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ListingCard;
