// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="brand-logo">
        <Link to="/" className="header-logo">
          Rento
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <NavItem path="/" label="Home" />
          <NavItem path="/features" label="Features" />
          <NavItem path="/pricing" label="Pricing" />
          <NavItem path="/contact" label="Contact" />
          <NavItem path="/login" label="Sign In" />
          <NavItem path="/signup" label="Sign Up" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
