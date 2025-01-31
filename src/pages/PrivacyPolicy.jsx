import React from "react";
import "../styles/PrivacyPolicy.css"; // Styling ke liye CSS file

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <h2>Your Privacy Matters</h2>
      <p>
        At <strong>Rento</strong>, we are committed to protecting your personal
        information. This Privacy Policy outlines how we collect, use, and
        safeguard your data when you use our website and services.
      </p>

      <h3>What We Collect</h3>
      <ul>
        <li>Personal details: Name, email, phone number.</li>
        <li>
          Payment information: Securely processed via trusted payment gateways.
        </li>
        <li>Usage data: To improve user experience.</li>
      </ul>

      <h3>How We Use Your Information</h3>
      <ul>
        <li>To provide and manage our services.</li>
        <li>To communicate with you regarding updates or promotions.</li>
        <li>To enhance security and prevent fraud.</li>
      </ul>

      <h3>Your Rights</h3>
      <ul>
        <li>Access your data anytime.</li>
        <li>Request data deletion.</li>
        <li>Opt-out of promotional communications.</li>
      </ul>

      <p>
        <strong>For More Information:</strong> Read the full Privacy Policy{" "}
        <a href="#">here</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
