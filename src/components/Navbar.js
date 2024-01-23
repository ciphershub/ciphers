// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {

  return (
    <>
      <div className="navbar" style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000}}>
        <nav>
          <div className="logo">
            <img
              src="cipher-logo.png"
              className="logo-img"
              alt="Ciphers Logo"
            />
          </div>
          <div className="navigation-btn">
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/competitions">Competitions</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/startups">Startups</Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
