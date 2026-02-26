function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-field">
        <span className="search-label">Where</span>
        <span className="search-placeholder">Search destinations</span>
      </div>
      <div className="search-divider" />
      <div className="search-field">
        <span className="search-label">When</span>
        <span className="search-placeholder">Add dates</span>
      </div>
      <div className="search-divider" />
      <div className="search-field">
        <span className="search-label">Who</span>
        <span className="search-placeholder">Add guests</span>
      </div>
      <div className="search-button">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="white" stroke="white" strokeWidth="2">
          <circle cx="11" cy="11" r="8" fill="none" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
    </div>
  )
}

export default SearchBar;
