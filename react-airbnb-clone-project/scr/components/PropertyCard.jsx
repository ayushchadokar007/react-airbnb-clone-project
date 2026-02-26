import { useState } from "react";

function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="property-card">
      <div className="card-image-wrapper">
        <img src={property.image} alt={property.title} className="card-image" />
        {property.badge && <span className="card-badge">{property.badge}</span>}
        <button
          className={`card-heart ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="card-footer">
        <h4 className="card-title">{property.title}</h4>
        <div className="card-info">
          <p className="card-price">{property.price}</p>
          <div className="card-rating">
            <span className="star">★</span>
            <span>{property.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard;
