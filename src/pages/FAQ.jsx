import React from "react";
import "../styles/FAQ.css"; // Styling ke liye CSS file

const FAQ = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h3>Q: Is Rento free to use?</h3>
        <p>
          A: Yes! Listing properties is completely free. Advanced features are
          available through our premium plans.
        </p>
      </div>

      <div className="faq-item">
        <h3>Q: How secure is my data?</h3>
        <p>
          A: We use advanced encryption and secure payment gateways to protect
          your data.
        </p>
      </div>

      <div className="faq-item">
        <h3>Q: Can tenants contact landlords directly?</h3>
        <p>A: Yes, tenants can message landlords via the app.</p>
      </div>

      <div className="faq-item">
        <h3>Q: Does Rento support multiple properties?</h3>
        <p>
          A: Absolutely. Rento is designed to manage multiple properties with
          ease.
        </p>
      </div>

      <p>
        <strong>Have more questions?</strong> Contact us at{" "}
        <a href="mailto:support@rento.com">support@rento.com</a>.
      </p>
    </div>
  );
};

export default FAQ;
