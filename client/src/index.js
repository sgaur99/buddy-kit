import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import CampusCompass from "./pages/campuscompass/campuscompass";
import CityPulse from "./pages/citypulse/citypulse";
import StudyScope from "./pages/studyscope/studyscope";
import MeetMate from "./pages/meetmate/meetmate";

const root = ReactDOM.createRoot(document.getElementById("root")); // Updated to use createRoot
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/campuscompass" element={<CampusCompass />} />
        <Route path="/citypulse" element={<CityPulse />} />
        <Route path="/studyscope" element={<StudyScope />} />
        <Route path="/meetmate" element={<MeetMate />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
