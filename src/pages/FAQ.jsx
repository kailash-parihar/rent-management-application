import React from "react";
import "../styles/FAQ.css"; // Styling ke liye CSS file

const FAQ = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h3>
          <strong>Question : </strong>Is Rento free to use?
        </h3>
        <p>
          <strong>Answer : </strong>Yes! Listing properties is completely free.
          Advanced features are available through our premium plans.
        </p>
      </div>

      <div className="faq-item">
        <h3>
          <strong>Question : </strong> How secure is my data?
        </h3>
        <p>
          <strong>Answer : </strong>We use advanced encryption and secure
          payment gateways to protect your data.
        </p>
      </div>

      <div className="faq-item">
        <h3>
          <strong>Question : </strong> Can tenants contact landlords directly?
        </h3>
        <p>
          <strong>Answer : </strong> Yes, tenants can message landlords via the
          app.
        </p>
      </div>

      <div className="faq-item">
        <h3>
          <strong>Question : </strong> Does Rento support multiple properties?
        </h3>
        <p>
          <strong>Answer : </strong> Absolutely. Rento is designed to manage
          multiple properties with ease.
        </p>
      </div>

      <p>
        <strong>Have more questions?</strong> Contact us at <a href="mailto:support@rentoapp.in">support@rentoapp.in</a>.
      </p>
    </div>
  );
};

export default FAQ;
