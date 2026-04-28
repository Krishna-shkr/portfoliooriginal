import React, { useRef, useState } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const clients = [
  { src: Walmart, alt: 'Walmart' },
  { src: Adobe, alt: 'Adobe' },
  { src: Microsoft, alt: 'Microsoft' },
  { src: Facebook, alt: 'Facebook' },
];

const socials = [
  { src: facebookIcon, alt: 'Facebook', href: 'https://facebook.com' },
  { src: twitterIcon, alt: 'Twitter', href: 'https://twitter.com' },
  { src: youtubeIcon, alt: 'YouTube', href: 'https://youtube.com' },
  { src: instagramIcon, alt: 'Instagram', href: 'https://instagram.com' },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
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
    <section id="contactPage">
      <div id="clients">
        <h2 className="contactPageTitle">My Clients</h2>
        <p className="clientDesc">
          Some of the organizations I&rsquo;ve had the chance to work with.
        </p>
        <div className="clientsImgs">
          {clients.map((c) => (
            <img
              key={c.alt}
              src={c.src}
              alt={c.alt}
              className="clientImg"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below and I&rsquo;ll get back to you.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail} noValidate>
          <label htmlFor="your-name" className="visuallyHidden">Your name</label>
          <input
            id="your-name"
            type="text"
            className="name"
            placeholder="Your Name"
            name="your-name"
            required
          />
          <label htmlFor="your-email" className="visuallyHidden">Your email</label>
          <input
            id="your-email"
            type="email"
            className="email"
            placeholder="Your Email"
            name="your-email"
            required
          />
          <label htmlFor="message" className="visuallyHidden">Your message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="submitBtn" disabled={status.type === 'sending'}>
            {status.type === 'sending' ? 'Sending…' : 'Submit'}
          </button>
          {status.type !== 'idle' && status.type !== 'sending' && (
            <p
              role="status"
              className={`formStatus formStatus--${status.type}`}
            >
              {status.message}
            </p>
          )}
          <div className="links">
            {socials.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.alt}
              >
                <img src={s.src} alt="" className="link" />
              </a>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
