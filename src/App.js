// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import Competitions from "./components/Competitions";
import Resources from "./components/Resources";
import Startups from "./components/Startups";
import UpcomingEventsModal from "./components/UpcomingEventsModal";
import "./App.css";
import './components/home.css';

function App() {
  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/startups" element={<Startups />} />
        </Routes>
        <UpcomingEventsModal />
      </Router>
    </div>
  );
}

export default App;
