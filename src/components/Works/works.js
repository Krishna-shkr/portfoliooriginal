import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

const projects = [
  { src: portfolio1, alt: 'Project 1' },
  { src: portfolio2, alt: 'Project 2' },
  { src: portfolio3, alt: 'Project 3' },
  { src: portfolio4, alt: 'Project 4' },
  { src: portfolio5, alt: 'Project 5' },
  { src: portfolio6, alt: 'Project 6' },
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        A selection of recent projects across web, mobile, and design work.
      </span>
      <div className="worksImgs">
        {projects.map((p) => (
          <img key={p.alt} src={p.src} alt={p.alt} className="worksImg" loading="lazy" />
        ))}
      </div>
      <div>
        <button type="button" className="workBtn">See more</button>
      </div>
    </section>
  );
};

export default Works;
