// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

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
        <p className="footer-description">
          We are dedicated to ensuring digital accessibility for individuals
          with disabilities. We are continuously working to enhance the online
          experience for everyone. Your feedback and requests are extremely
          valuable to us. If you wish to report an issue or need an
          accommodation, please do not hesitate to contact us. We're here for
          you, ensuring your experience is exceptional.
        </p>
      </div>

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

      <div className="footer-bottom">
        <ul className="footer-links">
          <li>
            <Link to="/privacy-policy">Privacy Policies</Link>
          </li>
          <li>
            <Link to="/terms-of-use">Terms of Use</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/faq">faq</Link>
          </li>
        </ul>
      </div>

      <div className="footer-copyright">
        <div>
          <p>
            {" "}
            &copy; 2025 All Rights Reserved <span>|</span> Livora Tech Solutions
            Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
