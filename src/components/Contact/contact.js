import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Email', href: 'mailto:krishnasanaka25@gmail.com' },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message:
          'Email service is not configured. Please reach out directly at krishnasanaka25@gmail.com.',
      });
      return;
    }

    setStatus({ type: 'sending', message: 'Sending…' });

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        e.target.reset();
        setStatus({ type: 'success', message: 'Thanks! Your message was sent.' });
      },
      (error) => {
        setStatus({
          type: 'error',
          message: `Sorry, something went wrong: ${error?.text || 'please try again later.'}`,
        });
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="contactInner">
        <p className="contactPretitle">If my way of building resonates with you</p>
        <h2 className="contactTitle">LET&rsquo;S TALK!</h2>

        <form className="contactForm" ref={form} onSubmit={sendEmail} noValidate>
          <label htmlFor="your-name" className="visuallyHidden">Your name</label>
          <input
            id="your-name"
            type="text"
            className="contactInput"
            placeholder="Your name"
            name="your-name"
            required
          />
          <label htmlFor="your-email" className="visuallyHidden">Your email</label>
          <input
            id="your-email"
            type="email"
            className="contactInput"
            placeholder="Your email"
            name="your-email"
            required
          />
          <label htmlFor="message" className="visuallyHidden">Your message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="contactInput contactTextarea"
            placeholder="What&rsquo;s on your mind?"
            required
          />
          <button
            type="submit"
            className="contactSubmit"
            disabled={status.type === 'sending'}
          >
            {status.type === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status.type === 'success' && (
            <p role="status" className="contactStatus contactStatusSuccess">{status.message}</p>
          )}
          {status.type === 'error' && (
            <p role="status" className="contactStatus contactStatusError">{status.message}</p>
          )}
        </form>

        <div className="contactSocials">
          {socials.map((s) => {
            const isExternal = s.href.startsWith('http');
            return (
              <a
                key={s.label}
                href={s.href}
                className="contactSocialLink"
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {s.label} <span aria-hidden="true">→</span>
              </a>
            );
          })}
        </div>

        <div className="contactFooterRow">
          <span>Thanks for visiting!</span>
          <span className="contactEmail">krishnasanaka25@gmail.com</span>
          <span>&copy; {new Date().getFullYear()} Krishna Sanaka</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
