# BuddyKit

BuddyKit is a comprehensive platform designed to assist international students in adapting to their new environment. It provides modular features to address academic, social, and logistical challenges, fostering a sense of community and enhancing the overall student experience.

## Features

### Core Modules
1. **CampusCompass**: Logistics and onboarding support for students.
2. **CityPulse**: Discover local dining options, discounts, and reviews.
3. **StudyScope**: Academic resources, course navigation, and planning tools.
4. **MeetMate**: Community events, networking, and buddy-matching.

## Installation

### Client Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sgaur99/buddy-kit.git
   cd BuddyKit
   ```

2. Navigate to the client folder and install dependencies:
   ```bash
   cd client
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Server Setup

1. Navigate to the server folder:
   ```bash
   cd server
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. The server will run on `http://localhost:5000` by default.

## Project Structure

```
BuddyKit/
├── client/
│   ├── src/
│   │   ├── components/   # Reusable components (e.g., Navbar, Layout)
│   │   ├── pages/        # Application pages (e.g., LandingPage, CampusCompass)
│   │   ├── App.js        # Main application component
│   │   └── index.js      # Entry point
│   ├── public/           # Static assets
│   └── package.json      # Client dependencies
├── server/
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   ├── server.js         # Main server file
│   └── package.json      # Server dependencies
├── .gitignore            # Ignored files and directories
├── README.md             # Project documentation
└── refernce-copilot.md   # Internal reference document (ignored in .gitignore)
```
## License

This project is licensed under the MIT License. 

## BuddyKit Web Platform: Project Implementation Report

### 1. Executive Summary
#### Project Vision
BuddyKit is an innovative web platform designed to revolutionize the international student experience in Boston by providing a comprehensive, integrated solution for academic, social, and logistical challenges.

#### Key Objectives
- Simplify international student transition and integration
- Create a centralized, user-friendly platform with modular functionality
- Foster community connections and support networks
- Provide actionable, crowd-sourced information across critical domains

### 2. Platform Architecture
#### 2.1 Core Modules
1. CampusCompass: Logistics and Onboarding Support
2. CityPulse: Local Dining and Discount Discovery
3. StudyScope: Academic Resource and Course Navigation
4. MeetMate: Community Events and Networking


### 3. Detailed Module Breakdown
#### 3.1 CampusCompass
**Features**
- Comprehensive onboarding checklist
- Interactive housing guidance
- Campus and city location maps
- Detailed logistics FAQ

**Development Priorities**
- Create modular, updatable checklist system
- Integrate geolocation services
- Develop responsive, mobile-first design

#### 3.2 CityPulse
**Features**
- Crowd-sourced restaurant reviews
- Advanced filtering (cuisine, dietary requirements)
- Discount tracking
- User-generated content management

**Development Priorities**
- Implement robust tagging and search functionality
- Develop review and rating system
- Create merchant partnership program

#### 3.3 StudyScope
**Features**
- Course and professor review platform
- Semester planning tools
- Collaborative course insights
- Academic resource tagging

**Development Priorities**
- Build secure, verified review submission
- Develop comprehensive tagging taxonomy
- Create interactive course comparison tools

#### 3.4 MeetMate
**Features**
- Student event discovery
- Community group connections
- Buddy matching system
- Event RSVP and tracking

**Development Priorities**
- Develop smart matching algorithms
- Create secure group invitation systems
- Implement event recommendation engine

### 4. Conclusion
BuddyKit represents a transformative approach to supporting international students, leveraging technology to create a comprehensive, community-driven platform that addresses critical needs in academic and social integration.

---

**Prepared by:** BuddyKit Project Team  
**Date:** March 25, 2025

---

### Detailed Module Breakdown and Integration Plan for BuddyKit

#### 1. CampusCompass Module
**Purpose:** Facilitate seamless onboarding and logistical support for international students.

**Features:**
- Interactive onboarding checklist
- Housing recommendations and guides
- Campus and city maps with geolocation
- Logistics FAQ and information repository

**API and Platforms Integration:**
- Google Maps API (Maps and geolocation)
- Google Places API (Housing and local area information)
- Firebase Authentication (Secure user sign-in)

#### 2. CityPulse Module
**Purpose:** Help students discover local eateries, discounts, and peer-reviewed dining experiences.

**Features:**
- User-generated restaurant reviews
- Advanced filtering by cuisine, dietary preferences
- Discount tracking and notification

**API and Platforms Integration:**
- Yelp Fusion API (Restaurant reviews and ratings)
- Google Places API (Location details and user reviews)
- Firebase Firestore (Database for managing dynamic user content)

#### 3. StudyScope Module
**Purpose:** Provide students with detailed academic support and course-planning tools.

**Features:**
- Course and professor review system
- Semester planning tools
- Academic resources tagging and search

**API and Platforms Integration:**
- Firebase Firestore (Database for course and review data)
- Custom-built APIs for secure data validation and content moderation
- University-specific APIs (Course catalogue integration where available)

#### 4. MeetMate Module
**Purpose:** Foster community building and enhance student interaction through events and buddy-matching.

**Features:**
- Smart buddy-matching system
- Event discovery, RSVP, and tracking
- Community group formation and interaction

**API and Platforms Integration:**
- Meetup API (Event discovery and integration)
- Firebase Realtime Database (Real-time updates and user interactions)
- Custom-built matching algorithms with TensorFlow (ML-driven recommendations)


---

### Legal and Compliance Considerations:
- **Data Protection:** Compliance with GDPR, CCPA, FERPA, and other student data regulations
- **Content Moderation:** Implementation of proactive moderation tools and user-generated content verification
- **Security Audits:** Regular audits and vulnerability assessments
- **Privacy Policies:** Transparent, clear privacy policies detailing data handling practices

---