import React from "react";
import "../styles/PricingPage.css";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Free Plan",
      price: "₹0",
      features: [
        "Basic features",
        "Single property",
        "Limited support",
        "Basic analytics",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Starter Plan",
      price: "₹499/month",
      features: [
        "Advanced features",
        "Up to 5 properties",
        "Email support",
        "Basic analytics",
        "Custom branding",
        "Customer leads",
      ],
      buttonText: "Choose Starter",
    },
    {
      title: "Custom Plan",
      price: "Custom",
      features: [
        "All features included",
        "Unlimited properties",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
      ],
      buttonText: "Contact Us",
    },
  ];

  return (
    <div className="pricing">
      <h1>Plans That Fit Your Needs</h1>
      <p>
        Choose from flexible pricing plans tailored for landlords and property
        managers of all sizes.
      </p>

      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.title}</h3>
            <h2>{plan.price}</h2>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-button">{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
