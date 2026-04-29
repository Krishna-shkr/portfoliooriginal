import React from 'react';
import './skills.css';

const skills = [
  {
    name: 'Node.js',
    role: 'Backend',
    blurb: 'Express APIs, Service Bus consumers, async job processors, MongoDB integration.',
  },
  {
    name: '.NET / C#',
    role: 'Notification orchestration',
    blurb: 'ASP.NET Core service that orchestrates email, SMS, push, and in-app notifications with background workers, multi-tenancy, and bulk job tracking.',
  },
  {
    name: 'MongoDB',
    role: 'Document store',
    blurb: 'Mongoose schemas for devices, notification logs, jobs, and audit trails.',
  },
  {
    name: 'SQL Server',
    role: 'Relational store',
    blurb: 'Transactional data, reporting queries, and stored procedures.',
  },
  {
    name: 'Angular 18',
    role: 'Frontend',
    blurb: 'Material + PrimeNG dashboards, RxJS streams, and SignalR clients.',
  },
  {
    name: 'Azure',
    role: 'Cloud',
    blurb: 'Service Bus, Notification Hub, SignalR, Web PubSub, Functions, Blob Storage.',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skillsHeader" data-reveal>
        <span className="eyebrow">What I work with</span>
        <h2 className="skillsTitle display">MY STACK</h2>
        <p className="skillsLead">
          The tools I reach for every day, shipped in production at scale.
        </p>
      </div>

      <ol className="skillsList" data-reveal data-reveal-delay="1">
        {skills.map((s, i) => (
          <li key={s.name} className="skillRow">
            <span className="skillIndex">{String(i + 1).padStart(2, '0')}</span>
            <div className="skillCopy">
              <h3 className="skillName">{s.name}</h3>
              <p className="skillBlurb">{s.blurb}</p>
            </div>
            <span className="skillRole">{s.role}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Skills;
