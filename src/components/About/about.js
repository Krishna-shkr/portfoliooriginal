import React from 'react';
import './about.css';
import portrait from '../../assets/krishna.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="aboutLeft">
        <span className="eyebrow aboutEyebrow">A bit</span>
        <h2 className="aboutTitle display">ABOUT ME</h2>
        <button type="button" className="aboutResume" aria-label="Open resume (coming soon)">
          My resume
        </button>
      </div>

      <div className="aboutRight">
        <div className="aboutPhotoWrap">
          <img src={portrait} alt="Krishna Sanaka" className="aboutPhoto" />
        </div>

        <p className="aboutLeadLine">
          <em>I&rsquo;m Krishna, a full stack developer.</em>
        </p>

        <p className="aboutBody">
          I work across the stack — Angular front-ends, Node.js and .NET services,
          MongoDB and SQL Server data layers — and I care most about the parts you
          don&rsquo;t usually see: queues, retries, logs, the things that decide
          whether a feature actually works in production.
        </p>

        <p className="aboutBody">
          Most of my recent work is on Yashcard, a digital credentials platform —
          everything from wallet creation to transaction generation. I own the
          security layer (blockchain anchoring on Polygon, IPFS, RSA-encrypted
          IDs), the multi-channel notification system, the smart-card and
          certificate generation pipeline, the Excel-driven onboarding flow that
          turns raw student data into wallets and transactions, and the
          reporting side that exports up to 2–5 lakh records back out to clients
          on demand.
        </p>
      </div>
    </section>
  );
};

export default About;
