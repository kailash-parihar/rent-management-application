import React from "react";
import "../styles/container.css";

const Container = () => {
  return (
    <div className="container-component">
      <div className="container-content">
        <div className="container-content-title">
          <h1 className="automation">
            Save time and reduce manual work with smart automation tools:{" "}
          </h1>
        </div>

        <div className="container-sections">
          <div className="left-section">
            <h2>Rent Reminders</h2>
            <p className="description">
              Never miss a payment. Automatically notify tenants of upcoming due
              dates.
            </p>
            <h2>Lead Generation</h2>
            <p className="description">
              Attract high-quality tenants through our integrated lead
              generation system.
            </p>
            <h2>Boost Sales</h2>
            <p className="description">
              Use analytics to identify opportunities, optimize property
              listings, and maximize occupancy rates.
            </p>
            <h2>Customized Notifications</h2>
            <p className="description">
              Send real-time updates to tenants and landlords via SMS or email
              for everything from maintenance updates to payment confirmations.
            </p>
          </div>

          <div className="right-section">
            <img
              src="../src/assets/images/manual-vs-automated.png"
              alt="manual-vs-automated"
              className="image"
            />
          </div>
        </div>
      </div>

      <div className="container-content reversed">
        <div className="container-content-title">
          <h1 className="management">
            Rento doesn’t stop at the basics. We’ve included advanced tools to
            make your property management effortless:{" "}
          </h1>
        </div>

        <div className="container-sections">
          <div className="left-section">
            <h2>Tenant Screening</h2>
            <p className="description">
              Simplify the onboarding process by running background checks and
              verifying documents directly on the platform.
            </p>
            <h2>Property Insights & Analytics</h2>
            <p className="description">
              Use dashboards to track occupancy trends, rental income, and
              performance metrics.
            </p>
            <h2>Complaint Resolution Tracking</h2>
            <p className="description">
              Manage complaints with a simple, transparent system that ensures
              tenant satisfaction.
            </p>
            <h2>Integrated Map View</h2>
            <p className="description">
              Showcase properties with geolocation tools for tenants searching
              by area or proximity.
            </p>
          </div>
          <div className="right-section">
            <img
              src="../src/assets/images/property-management-auto.png"
              alt="property-management"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
