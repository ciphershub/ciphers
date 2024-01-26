// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {

  return (
    <>
      <div className="navbar" style={{ position: "fixed", top: 0, width: "100%", zIndex: 100}}>
        <nav>
          <div className="logo">
            <img
              src="cipher-logo-removebg.png"
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
            <Link to="/contactus"><nobr>Contact Us</nobr></Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
