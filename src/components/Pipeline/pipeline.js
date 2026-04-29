import React from 'react';
import './pipeline.css';

const pillars = [
  {
    n: '01',
    label: 'Security',
    title: 'Blockchain-anchored credentials',
    body:
      'Wallet contents and transaction proofs are anchored on Polygon, with documents pinned to IPFS and verified through Merkle trees. User identifiers are encrypted with RSA before they ever leave the API, so even internal logs don’t expose PII.',
    measures: [
      'Polygon (Matic) for on-chain anchoring',
      'IPFS for tamper-evident document storage',
      'Merkle proofs + RSA-encrypted user IDs',
    ],
  },
  {
    n: '02',
    label: 'Communications',
    title: 'Multi-channel notifications',
    body:
      'A single wallet or transaction event fans out to in-app (SignalR), push (Azure Notification Hub with FCM fallback), email (SendGrid), and SMS (AWS SNS / Twilio). Service Bus queues decouple producers from delivery, every attempt is logged, and failures retry with backoff.',
    measures: [
      'In-app: SignalR + WebSockets',
      'Push: Azure Notification Hub + FCM',
      'Email: SendGrid',
      'SMS: AWS SNS / Twilio',
    ],
  }, 
  {
    n: '03',
    label: 'File generation',
    title: 'Smart cards & certificates',
    body:
      'On wallet creation we generate personalized smart cards; on transaction completion we issue PDF certificates with embedded QR codes that link back to a verifier. Templates are configurable per institution, and every artifact is hashed and pinned to IPFS for later verification.',
    measures: [
      'Smart cards rendered with Jimp + QR',
      'Certificates via pdf-lib / Puppeteer',
      'QR-verifiable, IPFS-pinned outputs',
    ],
  },
  {
    n: '04',
    label: 'Bulk data',
    title: 'Excel-driven onboarding & client exports',
    body:
      'Student data arrives as Excel: Azure Functions blob triggers validate every row, organize it, and only then fan it out to Service Bus queues that drive wallet creation and transaction generation. Separately, the same platform produces client-requested data exports — clean extracts that comfortably reach 2–5 lakh records without timing the front-end out.',
    measures: [
      'Validate → organize → initiate (wallets / transactions)',
      'Client exports up to 2–5 lakh records',
      'Azure Functions + Service Bus, streaming ExcelJS',
    ],
  },
];

const Pipeline = () => {
  return (
    <section id="pipeline" className="pipeline">
      <div className="pipelineHeader" data-reveal>
        <span className="eyebrow">From wallet creation to transaction generation</span>
        <h2 className="pipelineTitle display">WHAT I BUILD</h2>
        <p className="pipelineLead">
          Four pillars I own end-to-end across the Yashcard platform — the
          security layer, the communications layer, the artifacts users walk
          away with, and the bulk data movement that keeps it all flowing.
        </p>
      </div>

      <div className="pillarGrid">
        {pillars.map((p, i) => (
          <article
            key={p.n}
            className="pillarCard"
            data-reveal
            data-reveal-delay={Math.min(i + 1, 4)}
          >
            <div className="pillarHeader">
              <span className="pillarN">{p.n}</span>
              <span className="pillarLabel">{p.label}</span>
            </div>
            <h3 className="pillarTitle">{p.title}</h3>
            <p className="pillarBody">{p.body}</p>
            <ul className="pillarMeasures">
              {p.measures.map((m) => (
                <li key={m} className="pillarMeasure">{m}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pipeline;
