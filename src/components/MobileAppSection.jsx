import React from "react";
import "../styles/MobileAppSection.css"; // Create this file for custom styles

const MobileAppSection = () => {
  return (
    <div className="mobile-app-section">
      <h2 className="section-heading">Mobile App for On-the-Go Management</h2>
      <p className="section-description">
        Stay connected wherever you are with the Rento mobile app:
      </p>

      <div className="app-features">
        <ul className="feature-list">
          <li>List, update, and track properties in real-time.</li>
          <li>
            Receive instant notifications about tenant queries or payments.
          </li>
          <li>Manage complaints and inventory directly from your phone.</li>
        </ul>
      </div>

      <div className="cta-buttons">
        <div>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img
              src="../assets/svg/app-store-badge.svg"
              type="image/svg+xml"
              alt="Download on the App Store"
            />
          </a>
          &nbsp; &nbsp; &nbsp;
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img
              src="../assets/svg/google-play-badge.svg"
              type="image/svg+xml"
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
