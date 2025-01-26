import React from "react";
import "../styles/Home.css";
import Testimonials from "../components/Carousel.jsx";
import Container from "../components/Container.jsx";

const HomePage = () => {
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search an address, Rooms, Neighborhood, city or ZIP code"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="hero-section">
        <h1 className="hero-title">Automate Your Rental Business</h1>
        <p className="hero-description">
          Effortlessly manage your rental properties with Rento, the all-in-one
          platform designed to simplify your operations, boost your income, and
          enhance tenant satisfaction. From listing properties to tracking
          payments, Rento takes care of it all.
        </p>
      </div>
      <div className="hero-background">
        <img
          src="../src/assets/images/home-frontend-image.webp"
          alt="background"
          srcset=""
        />
      </div>

      <div className="cards">
        <h1 className="cards-main-heading">
          Maximize efficiency with Rento's robust feature set
        </h1>
        <div className="cards-container">
          {" "}
          <div className="card">
            {" "}
            <img
              src="../src/assets/images/list-properties-for-free.jpg"
              alt="List Properties for Free"
              className="card-img"
            />{" "}
            <h2 className="card-title">List Properties for Free</h2>{" "}
            <p className="card-description">
              Showcase your properties online and attract tenants instantly
              without any listing fees.
            </p>{" "}
          </div>{" "}
          <div className="card">
            {" "}
            <img
              src="../src/assets/images/manage-everything-in-one-place.png"
              alt="Manage Everything in One Place"
              className="card-img"
            />{" "}
            <h2 className="card-title">Manage Everything in One Place</h2>{" "}
            <p className="card-description">
              Oversee multiple properties, tenants, complaints, and maintenance
              seamlessly from a single dashboard.
            </p>{" "}
          </div>{" "}
          <div className="card">
            {" "}
            <img
              src="../src/assets/images/track-payments-and-inventory.jpg"
              alt="Track Payments and Inventory"
              className="card-img"
            />{" "}
            <h2 className="card-title">Track Payments and Inventory</h2>{" "}
            <p className="card-description">
              Stay on top of rent payments, security deposits, and tenant
              balances while monitoring inventory like furniture, appliances, or
              room availability.
            </p>{" "}
          </div>{" "}
        </div>
      </div>
      <Container />
      <Testimonials />
    </>
  );
};

export default HomePage;
