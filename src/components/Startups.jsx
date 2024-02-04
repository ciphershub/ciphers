// Startups.js
import React from "react";
import Footer from "./Footer";
import UpcomingEventsModal from "./UpcomingEventsModal";
import "./Startups.css";

const Startups = () => {
  return (
    <div className="startups-body">
      <div className="startups-title">
        <h2>STARTUPS</h2>
      </div>
      <div className="startups-page">
        <div className="startups-header">
          <img src="under-construction.gif" alt="startups bg img" />
        </div>
      </div>
      <UpcomingEventsModal />
      <Footer />
    </div>
  );
};

export default Startups;
