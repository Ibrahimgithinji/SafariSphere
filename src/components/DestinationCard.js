import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination, index }) => {
  if (!destination || !destination.id || !destination.name || !destination.description) {
    return null;
  }

  return (
    <article className="card" tabIndex="0" aria-labelledby={`destination-title-${destination.id}`}>
      <img
        src={destination.image || "/images/Maasai mara.jpg"}
        alt={`${destination.name} - SafariSphere Tours destination`}
        loading="lazy"
        onError={(e) => (e.target.src = "/images/Maasai mara.jpg")}
      />
      <div className="card-content">
        <h3 id={`destination-title-${destination.id}`}>{destination.name}</h3>
        <p>{destination.description}</p>
        <Link to="/tours" className="btn">
          Explore Tours
        </Link>
      </div>
    </article>
  );
};

export default DestinationCard;