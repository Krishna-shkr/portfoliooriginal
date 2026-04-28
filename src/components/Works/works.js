import React from 'react';
import './works.css';

const projects = [
  {
    label: 'Orchestration',
    title: 'Multi-channel notification service',
    body:
      'ASP.NET Core service that handles email, SMS, push, and in-app notifications behind one API. Per-channel background workers, RabbitMQ-backed queues, multi-tenant MongoDB, bulk job tracking, and Azure SignalR for real-time delivery.',
    stack: ['.NET', 'SignalR', 'RabbitMQ', 'MongoDB'],
  },
  {
    label: 'Push',
    title: 'Cross-platform push delivery',
    body:
      'Azure Notification Hub integration with Firebase FCM as a fallback. Device registration with tags, multi-platform targeting, and bulk operations for 10k+ devices.',
    stack: ['Azure NH', 'FCM', 'Node.js', 'Mongoose'],
  },
  {
    label: 'Email',
    title: 'SendGrid email migration',
    body:
      'Migrated transactional email from AWS SNS to SendGrid for better deliverability. Templated wallet/transaction emails, attachments, and a full email history audit log.',
    stack: ['SendGrid', 'Node.js', 'Express'],
  },
  {
    label: 'Async',
    title: 'Service Bus job processor',
    body:
      'Notification jobs queued to Azure Service Bus and processed by a Node.js worker. Polling fallback when MongoDB Change Streams aren’t available, with retry and idempotency.',
    stack: ['Azure Service Bus', 'Node.js', 'MongoDB'],
  },
  {
    label: 'Bulk',
    title: 'Excel-driven student onboarding',
    body:
      'Blob-triggered Azure Functions validate and organize incoming student Excel sheets, then fan rows out to Service Bus queues that drive wallet creation and transaction generation in parallel.',
    stack: ['Azure Functions', 'Service Bus', 'ExcelJS'],
  },
  {
    label: 'Exports',
    title: 'On-demand client data exports',
    body:
      'Reporting pipeline that produces tailored Excel/PDF extracts on client request — comfortably reaching 2–5 lakh records per export without blocking the API or the UI.',
    stack: ['Azure Functions', 'ExcelJS', 'Node.js'],
  },
  {
    label: 'Integration',
    title: 'MKCL webhook + dynamic field mapper',
    body:
      'Webhook service that receives MKCL events and applies dynamically-configured field mappings (managed from an Angular UI), with idempotency and full event audit trail.',
    stack: ['Node.js', 'Express', 'Angular', 'MongoDB'],
  },
];

const Works = () => {
  return (
    <section id="works" className="works">
      <div className="worksHeader">
        <span className="eyebrow">What I&rsquo;ve shipped</span>
        <h2 className="worksTitle display">SELECTED WORK</h2>
        <p className="worksLead">
          Pieces of the Yashcard platform I designed and built end-to-end.
        </p>
      </div>

      <div className="worksGrid">
        {projects.map((p) => (
          <article key={p.title} className="workCard">
            <span className="workLabel">{p.label}</span>
            <h3 className="workCardTitle">{p.title}</h3>
            <p className="workCardBody">{p.body}</p>
            <ul className="workStack">
              {p.stack.map((tech) => (
                <li key={tech} className="workChip">{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Works;
