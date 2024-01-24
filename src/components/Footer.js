// Footer.js

import React from "react";
import "./footer.css";

import { useState, useEffect } from "react";

const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Increment view count in Google Analytics
    window.gtag('event', 'page_view');

    // Fetch the current view count from Google Analytics (optional)
    window.gtag('config', 'G-N9GJRQWTPE', {
      'send_to': 'G-N9GJRQWTPE',
      'event_callback': function() {
        const newVisitCount = window.gtag.getNumUsers();
        setVisitCount(newVisitCount);
      }
    });
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="website-visit-counter">website views: {visitCount}</div>
        <div className="contact-div">
          <ul className="sci">
            <li>
              <a
                href="https://github.com/ciphershub"
                target="_blank"
                rel="noreferrer"
              >
                <div className="header-main-sm-gh"></div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ciphers-community/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="header-main-sm-link"></div>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ciphers_community?igsh=MWEyd3BpM2dnOXVhNQ=="
                target="_blank"
                rel="noreferrer"
              >
                <div className="header-main-sm-ig"></div>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/groups/1594125844733444/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="header-main-sm-fb"></div>
              </a>
            </li>
            <li>
              <a
                href="mailto:ciphers_community@googlegroups.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="header-main-sm-gmail"></div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <div className="header-main-sm-x"></div>
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/aEDgyAWRjX"
                target="_blank"
                rel="noreferrer"
              >
                <div className="header-main-sm-dc"></div>
              </a>
            </li>
          </ul>
        </div>
        <p>&copy; 2024 CIPHERS All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
