import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro" className="intro">
      <div className="introBadge" aria-hidden="true">
        <span className="introDot"></span>
        Available for new opportunities
      </div>

      <p className="introGreeting">
        Hi! I&rsquo;m <span className="introGreetingName">Krishna</span> and I build
      </p>

      <h1 className="introDisplay display">
        FULL&nbsp;STACK
        <br />
        SYSTEMS
      </h1>

      <p className="introSub">
        I design and ship real-time, multi-channel platforms — Angular front-ends,
        Node.js and .NET services, and notification pipelines that actually deliver.
      </p>

      <div className="introCtas">
        <Link to="works" smooth={true} offset={-80} duration={500}>
          <button type="button" className="btnPrimary">View my work</button>
        </Link>
        <Link to="pipeline" smooth={true} offset={-80} duration={500}>
          <button type="button" className="btnGhost">See what I build →</button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
