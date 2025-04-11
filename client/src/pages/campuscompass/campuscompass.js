import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Section from "./components/Section";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../../components/Layout";

const CampusCompass = () => {
  const sections = [
    {
      title: "🎓 New Students (Arrival to 1st Semester)",
      subsections: [
        {
          title: "🛬 Pre-Departure Checklist (India → Boston)",
          items: [
            {
              text: "Passport validity (6+ months left)",
              link: "https://travel.state.gov/content/travel/en/passports.html",
            },
            {
              text: "F-1 Visa stamped",
              link: "https://travel.state.gov/content/travel/en/us-visas/study.html",
            },
            {
              text: "SEVIS fee paid and receipt printed",
              link: "https://fmjfee.com/i901fee/index.html",
            },
            {
              text: "Flight booking with layover buffer",
              link: "https://www.google.com/flights",
            },
            {
              text: "Vaccination requirements checked",
              link: "https://www.cdc.gov/vaccines/",
            },
            {
              text: "Travel insurance (optional but smart)",
              link: "https://www.insuremytrip.com/",
            },
            {
              text: "Currency exchange done (get $200 cash)",
              link: "https://www.xe.com/currencyconverter/",
            },
            {
              text: "Pack essentials + power converters",
              link: "https://www.amazon.com/",
            },
            {
              text: "Documents folder (I-20, passport, SEVIS, admit letter)",
              link: "https://studyinthestates.dhs.gov/",
            },
          ],
        },
        {
          title: "🛬 Arrival in Boston (Week 1–2)",
          items: [
            {
              text: "Open U.S. bank account (Chase, Bank of America)",
              link: "/campus-compass/bank", // Ensure this route matches App.js
            },
            {
              text: "Buy a U.S. SIM card (H2O, Mint, T-Mobile)",
              link: "/campus-compass/sim", // Updated route
            },
            {
              text: "Buy/borrow initial groceries & utensils",
              link: "/campus-compass/shopping", // Updated route
            },
            {
              text: "Set up MBTA CharlieCard (student discount)",
              link: "https://www.mbta.com/fares/charliecard",
            },
            {
              text: "Apply for SSN (only if working on-campus/CPT)",
              link: "https://www.ssa.gov/",
            },
            {
              text: "Get student ID card from university",
              link: "https://www.northeastern.edu/",
            },
            {
              text: "Attend OGS Orientation (mandatory for visa)",
              link: "https://www.northeastern.edu/ogs/",
            },
            {
              text: "Get Wi-Fi plan set up at apartment",
              link: "https://www.xfinity.com/",
            },
          ],
        },
        {
          title: "🧾 Apartment & Housing Setup",
          items: [
            {
              text: "Tour housing areas (Mission Hill, Fenway, Allston)",
              link: "https://www.apartmentlist.com/",
            },
            {
              text: "Sign lease (check for scams or broker fees)",
              link: "https://www.zillow.com/rent/",
            },
            {
              text: "Buy mattress/kitchen setup (IKEA, Target, Amazon)",
              link: "https://www.ikea.com/",
            },
            {
              text: "Set up electricity/gas (National Grid/Eversource)",
              link: "https://www.nationalgridus.com/",
            },
            {
              text: "Share rent splitting apps (Splitwise, Venmo)",
              link: "https://www.splitwise.com/",
            },
          ],
        },
        {
          title: "📚 Academic Setup",
          items: [
            {
              text: "Enroll in courses via university portal",
              link: "https://registrar.northeastern.edu/",
            },
            {
              text: "Create university email and access portal (Canvas, myNortheastern)",
              link: "https://canvas.northeastern.edu/",
            },
            {
              text: "Setup course calendar (Google Calendar)",
              link: "https://calendar.google.com/",
            },
            {
              text: "Buy books or access PDFs",
              link: "https://www.chegg.com/",
            },
            {
              text: "Meet academic advisor",
              link: "https://advising.northeastern.edu/",
            },
            {
              text: "Get CPT-eligible course guidance",
              link: "https://www.northeastern.edu/ogs/",
            },
          ],
        },
        {
          title: "💼 Career Setup (Early)",
          items: [
            {
              text: "Create a U.S.-style resume (1 page, action verbs)",
              link: "https://zety.com/resume-builder",
            },
            {
              text: "Create Handshake + LinkedIn profile",
              link: "https://www.linkedin.com/",
            },
            {
              text: "Attend university career fair (usually starts week 2–4)",
              link: "https://careers.northeastern.edu/",
            },
            {
              text: "Apply for on-campus jobs (library, dining, TA)",
              link: "https://studentemployment.northeastern.edu/",
            },
            {
              text: "Learn about CPT timeline (internship after 2 semesters)",
              link: "https://www.northeastern.edu/ogs/",
            },
          ],
        },
      ],
    },
    {
      title: "🧑‍🎓 Returning Students (Semester 2+)",
      subsections: [
        {
          title: "🧠 Semester Prep",
          items: [
            {
              text: "Check course reviews on StudyScope",
              link: "https://www.ratemyprofessors.com/",
            },
            {
              text: "Register classes before deadline",
              link: "https://registrar.northeastern.edu/",
            },
            {
              text: "CPT application prep (DSO letter, offer letter)",
              link: "https://www.ice.gov/sevis",
            },
            {
              text: "Tax filing deadline reminder (Jan–Apr, Sprintax)",
              link: "https://www.sprintax.com/",
            },
          ],
        },
        {
          title: "🏠 Living Logistics",
          items: [
            {
              text: "Apartment lease renewals or summer sublets",
              link: "https://www.apartmentlist.com/",
            },
            {
              text: "Electricity/gas/wifi bill reminders",
              link: "https://www.nationalgridus.com/",
            },
            {
              text: "Roommate finder tools",
              link: "https://www.roomster.com/",
            },
            {
              text: "Furniture resale/buy for incoming students",
              link: "https://www.facebook.com/marketplace/",
            },
          ],
        },
        {
          title: "🧑‍💻 Career Booster",
          items: [
            {
              text: "Internship application reminders (Glassdoor, LinkedIn)",
              link: "https://www.glassdoor.com/",
            },
            {
              text: "Company visa-friendliness tracker",
              link: "https://www.myvisajobs.com/",
            },
            {
              text: "Referrals from seniors/alumni (community tools)",
              link: "https://www.linkedin.com/",
            },
            {
              text: "Resume workshop events",
              link: "https://careers.northeastern.edu/",
            },
            {
              text: "GitHub portfolio + personal site guide",
              link: "https://github.com/",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        CampusCompass
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Your ultimate checklist for navigating life as a student in Boston.
      </Typography>
      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Section section={section} />
        </Box>
      ))}
    </Container>
  );
};

export default CampusCompass;
