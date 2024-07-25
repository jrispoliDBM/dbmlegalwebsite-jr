// src/App.js
import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ContactUs from './components/ContactUs';
import FaqSection from './components/FaqSection';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Container>
        <Section 
          id="startups"
          title="STARTUPS"
          subtitle="Legal Services for Innovators"
          content="In the fast-paced world of startups, having a robust legal framework isn't just necessary—it's a critical success factor. DBM Legal Services offers a comprehensive legal partnership for startups with a focus on delivering top-tier legal services to sophisticated, innovative enterprises."
          buttonText="Contact Us"
          imageUrl="/path-to-your-image.png"
        />
        <Section 
          id="foundational-support"
          title="Foundational Support for STARTUP SUCCESS"
          content={[
            "Corporate Strategy and Funding Preparation",
            "Drafting Contracts",
            "Corporate Structure Set-Up",
            "Employment Strategy and Policies",
            "Corporate Governance Management"
          ]}
        />
        <Section 
          id="fractional-gc"
          title="FRACTIONAL GC"
          subtitle="Strategic Legal Guidance as You Scale"
          content={[
            "Navigating Competitive Markets with Legal Prowess",
            "Ensuring a Successful Launch and Beyond",
            "Dedicated to Entrepreneurial Success",
            "A Full Business Cycle Partner"
          ]}
          buttonText="Learn More About Our Fractional GC Services"
        />
        <Section 
          id="kickoff-package"
          title="Startup Kickoff Package"
          subtitle="A comprehensive package designed to meet the immediate needs of startups and provide the tools necessary for successful growth and development."
          content={[
            "Initial consultation and strategy session",
            "Determination of entity structure",
            "Preparation of incorporation and qualification documents",
            "Organizational Board or Member Consent and initial resolutions",
            "Compliance with publishing requirements",
            "Employer Identification/Tax ID number procurement",
            "Guidance on employment and insurance requirements",
            "Advisory Board agreements",
            "Subscription based packages for ongoing legal support"
          ]}
        />
        <FaqSection />
      </Container>
      <ContactUs />
    </div>
  );
}

export default App;
