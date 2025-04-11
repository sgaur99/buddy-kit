import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CampusCompass from "./pages/campuscompass/campuscompass";
import CityPulse from "./pages/citypulse/citypulse";
import StudyScope from "./pages/studyscope/studyscope";
import MeetMate from "./pages/meetmate/meetmate";
import Layout from "./components/Layout";
import BankComparison from "./pages/campuscompass/components/BankComparison";
import SimComparison from "./pages/campuscompass/components/SimComparison";
import ShoppingComparison from "./pages/campuscompass/components/ShoppingComparison";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Landing page */}
        <Route
          path="/campus-compass"
          element={
            <Layout>
              <CampusCompass />
            </Layout>
          }
        />
        <Route
          path="/campus-compass/bank"
          element={
            <Layout>
              <BankComparison />
            </Layout>
          }
        />
        <Route
          path="/campus-compass/sim"
          element={
            <Layout>
              <SimComparison />
            </Layout>
          }
        />
        <Route
          path="/campus-compass/shopping"
          element={
            <Layout>
              <ShoppingComparison />
            </Layout>
          }
        />
        <Route
          path="/city-pulse"
          element={
            <Layout>
              <CityPulse />
            </Layout>
          }
        />
        <Route
          path="/study-scope"
          element={
            <Layout>
              <StudyScope />
            </Layout>
          }
        />
        <Route
          path="/meet-mate"
          element={
            <Layout>
              <MeetMate />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
