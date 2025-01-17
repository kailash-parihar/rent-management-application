import React from "react";
import "../styles/Home.css";

const HomePage = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Automate Your Rental Business</h1>
      <p className="hero-description">
        Effortlessly manage your rental properties with Rento, the all-in-one
        platform designed to simplify your operations, boost your income, and
        enhance tenant satisfaction. From listing properties to tracking
        payments, Rento takes care of it all.
      </p>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search an address, Rooms, Neighborhood, city or ZIP code"
        />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default HomePage;
