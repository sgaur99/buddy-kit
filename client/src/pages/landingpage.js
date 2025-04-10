import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Layout>
      <div className="landing-page">
        <h1>Welcome to BuddyKit</h1>
        <p>Explore our modules designed to enhance your experience:</p>
        <ul>
          <li>
            <Link to="/campuscompass">CampusCompass</Link> - Logistics and
            Onboarding Support
          </li>
          <li>
            <Link to="/citypulse">CityPulse</Link> - Local Dining and Discount
            Discovery
          </li>
          <li>
            <Link to="/studyscope">StudyScope</Link> - Academic Resource and
            Course Navigation
          </li>
          <li>
            <Link to="/meetmate">MeetMate</Link> - Community Events and
            Networking
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default LandingPage;
