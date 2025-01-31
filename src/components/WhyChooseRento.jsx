import React from "react";
import "../styles/WhyChooseRento.css";

const WhyChooseRento = () => {
  return (
    <div className="why-choose-rento">
      <h2 className="section-heading">Why Choose Rento?</h2>
      <p className="section-description">
        Whether you’re a landlord, property manager, or tenant, Rento caters to
        all your needs.
      </p>

      <div className="benefits-container">
        <div className="benefit-card">
          <h3 className="benefit-title">For Landlords</h3>
          <p className="benefit-description">
            Manage multiple properties, payments, and tenant interactions
            efficiently.
          </p>
        </div>

        <div className="benefit-card">
          <h3 className="benefit-title">For Property Managers</h3>
          <p className="benefit-description">
            Stay organized with advanced tools for scheduling, inventory
            tracking, and tenant communication.
          </p>
        </div>

        <div className="benefit-card">
          <h3 className="benefit-title">For Tenants</h3>
          <p className="benefit-description">
            Discover properties tailored to your preferences, pay rent securely,
            and enjoy responsive support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseRento;
