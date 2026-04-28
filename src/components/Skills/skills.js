import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = [
  {
    img: UIDesign,
    alt: 'UI/UX design icon',
    title: 'UI/UX Design',
    description:
      'Designing intuitive interfaces and user flows that turn complex tasks into simple ones.',
  },
  {
    img: WebDesign,
    alt: 'Website design icon',
    title: 'Website Design',
    description:
      'Building responsive, accessible websites with modern frontend tooling.',
  },
  {
    img: AppDesign,
    alt: 'App design icon',
    title: 'Graphic Design',
    description:
      'Creating consistent visual systems, icons, and brand assets.',
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I help teams ship polished products by combining engineering and design.
      </span>
      <div className="skillBars">
        {skills.map((s) => (
          <div key={s.title} className="skillBar">
            <img src={s.img} alt={s.alt} className="skillBarImg" loading="lazy" />
            <div className="skillBarText">
              <h2>{s.title}</h2>
              <p>{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
