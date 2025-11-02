import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/components.css';

const CharterCard = ({ charter }) => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate('/booking', { state: { type: 'Charter', destination: charter.title } });
  };

  return (
    <article className="card animated-card" style={{ animationDelay: `${charter.id * 80}ms` }} aria-labelledby={`charter-${charter.id}`}>
      <div className="image-container">
        <img
          src={charter.image || "/images/Private Jet Charters.jpg"}
          alt={charter.title || "Charter Image"}
          loading="lazy"
          onError={(e) => (e.target.src = "/images/Private Jet Charters.jpg")}
        />
        <div className="badges">
          {(charter.badges || []).map((b, i) => (
            <span className="badge" key={i}>{b}</span>
          ))}
        </div>
        <div className="image-overlay">
          <h4 id={`charter-${charter.id}`}>{charter.title}</h4>
        </div>
      </div>

      <div className="card-content">
        <p className="muted">{charter.description}</p>
        <div style={{ marginTop: 'auto' }}>
          <button onClick={handleBook} aria-label={`Book ${charter.title}`}>Book Charter</button>
        </div>
      </div>
    </article>
  );
};

export default CharterCard;