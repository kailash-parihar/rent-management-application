import React from "react";
import "../styles/TermsOfUse.css"; // Styling ke liye CSS file

const TermsOfUse = () => {
  return (
    <div className="terms-of-service">
      <h1>Terms of Service</h1>
      <h2>Rento Terms and Conditions</h2>
      <p>
        By using <strong>rentoapp.in</strong>, you agree to the following terms:
      </p>

      <h3>Usage Guidelines</h3>
      <ul>
        <li>All users must provide accurate information.</li>
        <li>
          Property listings should comply with local laws and regulations.
        </li>
      </ul>

      <h3>Limitation of Liability</h3>
      <p>
        Rento is not responsible for disputes between landlords and tenants but
        offers tools to facilitate communication.
      </p>

      <h3>Termination of Account</h3>
      <p>We reserve the right to suspend accounts violating our policies.</p>

      <p>
        <strong>Full Terms:</strong> Read our detailed Terms of Service{" "}
        <a href="#">here</a>.
      </p>
    </div>
  );
};

export default TermsOfUse;
