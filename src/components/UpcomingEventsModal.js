// UpcomingEventsModal.js
import { useState, useEffect } from 'react';
import '../App.css'; // Import the CSS file for styling
import { useLocation } from 'react-router-dom';

const UpcomingEventsModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Close the modal when navigating to the "EVENTS" page
    if (location.pathname.includes('/events')) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [location.pathname]);

  const toggleModal = () => {
    // Use the current state to determine the next state
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={`upcoming-events-modal ${isOpen ? 'open' : 'closed'}`}>
      {/* Add a button to close the modal */}
      <button className="close-button" onClick={toggleModal}>
        <img src='down-arrow.png' alt='down arrow'/>
      </button>
      {/* Your modal content goes here */}
      <div className="modal-content">
        <p>Upcoming Events</p>
        <img src='event.jpg' alt='events-mini'/>
      </div>
    </div>
  );
};

export default UpcomingEventsModal;
