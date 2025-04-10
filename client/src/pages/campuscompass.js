import React from "react";
import Layout from "../components/Layout";

const CampusCompass = () => {
  return (
    <Layout>
      <div>
        <h1>CampusCompass</h1>
        <p>
          Welcome to the CampusCompass module. Here you will find onboarding
          checklists, housing guidance, and more.
        </p>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Comprehensive onboarding checklist</li>
            <li>Interactive housing guidance</li>
            <li>Campus and city location maps</li>
            <li>Detailed logistics FAQ</li>
          </ul>
        </section>
        <section>
          <h2>Development Priorities</h2>
          <ul>
            <li>Create modular, updatable checklist system</li>
            <li>Integrate geolocation services</li>
            <li>Develop responsive, mobile-first design</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default CampusCompass;
