import { useState } from "react";

function Footer() {
  const [activeCategory, setActiveCategory] = useState("Popular");

  const categories = ["Popular", "Arts & culture", "Beach", "Mountains", "Outdoors", "Things to do"];

  return (
    <footer className="footer">
      <div className="footer-inspiration">
        <h3>Inspiration for future getaways</h3>
        <div className="footer-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`footer-cat-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="footer-links-grid">
          <div className="footer-link-item">
            <strong>New Delhi</strong>
            <span>Apartment rentals</span>
          </div>
          <div className="footer-link-item">
            <strong>Mumbai</strong>
            <span>Vacation rentals</span>
          </div>
          <div className="footer-link-item">
            <strong>Goa</strong>
            <span>Beach house rentals</span>
          </div>
          <div className="footer-link-item">
            <strong>Jaipur</strong>
            <span>Heritage stays</span>
          </div>
          <div className="footer-link-item">
            <strong>Udaipur</strong>
            <span>Lake view rentals</span>
          </div>
          <div className="footer-link-item">
            <strong>Pune</strong>
            <span>Homestays</span>
          </div>
          <div className="footer-link-item">
            <strong>Bangalore</strong>
            <span>Condo rentals</span>
          </div>
          <div className="footer-link-item">
            <strong>Manali</strong>
            <span>Cottage rentals</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Centre</li>
            <li>AirCover</li>
            <li>Safety information</li>
            <li>Cancellation options</li>
            <li>Report a concern</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li>Airbnb.org: disaster relief</li>
            <li>Combating discrimination</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Hosting</h4>
          <ul>
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2026 Airbnb Clone · Privacy · Terms · Sitemap</p>
        <div className="footer-socials">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">Instagram</a>
        </div>
      </div>
    </footer>
  ); 
}

export default Footer;
