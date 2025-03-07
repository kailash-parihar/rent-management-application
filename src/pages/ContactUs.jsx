import React, { useState } from "react";
import "../styles/ContactUs.css"; // Styling ke liye CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us!");
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <h2>Let’s Talk!</h2>
      <p>
        Have questions, need support, or want to share your feedback? We’d love
        to hear from you.
      </p>

      <div className="contact-info">
        <p>
          <strong>Address:</strong>
          <br />
          Near Gas Godown, Gulabpura,Bhilwara, Rajasthan, 311021
        </p>
        <hr />
       
        <br />

        <p>
          <strong>Email : </strong>
          <a href="mailto:support@rentoapp.in">support@rentoapp.in</a>
        </p>
        <p>
          <strong>WhatsApp : </strong> +91 77423 13567
        </p>
      </div>

      <div className="support-hours">
        <h3>Support Hours</h3>
        <p>Monday to Friday: 10:00 AM - 7:00 PM (IST)</p>
        <p>Saturday: 10:00 AM - 2:00 PM (IST)</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
