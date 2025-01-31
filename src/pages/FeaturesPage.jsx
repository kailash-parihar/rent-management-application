import React from "react";
import "../styles/FeaturesPage.css"; 

const Features = () => {
  const features = [
    {
      title: "Property Listings",
      description:
        "Showcase your properties with stunning visuals and details.",
      icon: "🏠",
    },
    {
      title: "Automated Reminders",
      description: "Ensure tenants never miss a payment.",
      icon: "⏰",
    },
    {
      title: "Analytics",
      description: "Gain insights into your rental business performance.",
      icon: "📊",
    },
    {
      title: "Cloud Storage",
      description: "Safeguard documents, leases, and records securely.",
      icon: "☁️",
    },
  ];

  return (
    <div className="features">
      <h1>Discover Rento’s Capabilities</h1>
      <p>
        Dive deep into the functionalities that make Rento the ultimate rental
        management platform.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <button className="explore-button">Explore Features in Detail</button>
    </div>
  );
};

export default Features;
