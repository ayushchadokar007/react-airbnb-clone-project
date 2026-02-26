import PropertyCard from "./PropertyCard";

function PropertySection({ section }) {
  return (
    <div className="property-section">
      <div className="section-header">
        <h2 className="section-title">{section.title}</h2>
        <span className="section-arrow">→</span>
      </div>
      <div className="section-scroll">
        {section.properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertySection;
 