// UpcomingEventsModal.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './home.css';

const UpcomingEventsModal = () => {
  return (
    <Link to="/events">
      <div id="upcomingEventsModal" className="upcoming-events-modal" style={{position: "fixed;"}}>
        <div className="modal-content">
          {/* <span className="close">&times;</span> */}
          <img src="event.jpg" alt="Event" className="event-image" />
        </div>
      </div>
    </Link>
  );
};

export default UpcomingEventsModal;
