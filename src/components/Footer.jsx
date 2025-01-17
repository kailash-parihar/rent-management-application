// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-description">
          Our recommendations are based on the properties you've viewed and
          saved, as well as the filters you've applied. We track your search
          activities to ensure you don’t miss out on the best and most suitable
          properties. With our smart suggestions, discover what truly matters to
          you and make your rental experience seamless and efficient.
        </p>
        <div className="footer-categories">
          <div className="footer-category">
            <Link to="/rental-homes">Rental Homes</Link>
          </div>
          <div className="footer-category">
            <Link to="/rentals-rooms">Rental Rooms</Link>
          </div>
          <div className="footer-category">
            <Link to="/real-estate-properties">Real Estate Properties</Link>
          </div>
          <div className="footer-category">
            <Link to="/flates">Flates</Link>
          </div>
          <div className="footer-category">
            <Link to="/co-living-spaces">Co-Living Spaces</Link>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <ul className="footer-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>

          <li>
            <Link to="/research">Research</Link>
          </li>

          <li>
            <Link to="/advertise">Advertise</Link>
          </li>
          <li>
            <Link to="/terms-of-use">Terms of Use</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policies</Link>
          </li>

          <li>
            <Link to="/cookie-preference">Cookie Preference</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 Rento App Private Limited. We are dedicated to ensuring digital
          accessibility for individuals with disabilities. We are continuously
          working to enhance the online experience for everyone. Your feedback
          and requests are extremely valuable to us. If you wish to report an
          issue or need an accommodation, please do not hesitate to contact us.
          We're here for you, ensuring your experience is exceptional.
        </p>
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
