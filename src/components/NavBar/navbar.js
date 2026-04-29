import React, { useState, useEffect } from 'react';
import './navbar.css';
import avatar from '../../assets/krishna.jpeg';
import { Link } from 'react-scroll';

const navItems = [
  { to: 'intro', label: 'Home', offset: -120 },
  { to: 'about', label: 'About', offset: -80 },
  { to: 'skills', label: 'Skills', offset: -80 },
  { to: 'pipeline', label: 'What I build', offset: -80 },
  { to: 'works', label: 'Projects', offset: -80 },
];

const scrollOpts = {
  smooth: 'easeInOutQuart',
  duration: 900,
  spy: true,
  isDynamic: true,
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const close = () => setShowMenu(false);

  // Lock background scroll while the mobile sheet is open
  useEffect(() => {
    if (!showMenu) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showMenu]);

  return (
    <header className="navWrap">
      <nav className="navPill">
        <div className="navIdentity">
          <span className="navAvatarRing">
            <img src={avatar} alt="Krishna Sanaka" className="navAvatar" />
            <span className="navStatusDot" aria-hidden="true"></span>
          </span>
          <span className="navIdentityText">
            <span className="navName">Krishna</span>
            <span className="navRole">Full Stack Developer</span>
          </span>
        </div>

        <ul className="navList">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                activeClass="navLinkActive"
                to={item.to}
                {...scrollOpts}
                offset={item.offset}
                className="navLink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="contact" {...scrollOpts} offset={-40}>
          <button type="button" className="navContactBtn">Contact</button>
        </Link>

        <button
          type="button"
          className={`navBurger ${showMenu ? 'navBurgerOpen' : ''}`}
          aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={showMenu}
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <span className="navBurgerLine"></span>
          <span className="navBurgerLine"></span>
          <span className="navBurgerLine"></span>
        </button>
      </nav>

      <div
        className={`mobileSheetBackdrop ${showMenu ? 'mobileSheetBackdropOpen' : ''}`}
        onClick={close}
        aria-hidden="true"
      ></div>

      <div
        className={`mobileSheet ${showMenu ? 'mobileSheetOpen' : ''}`}
        role="menu"
      >
        <span className="mobileSheetEyebrow">Jump to</span>
        <ul className="mobileSheetList">
          {navItems.map((item, i) => (
            <li
              key={item.to}
              className="mobileSheetItem"
              style={{ transitionDelay: showMenu ? `${60 + i * 40}ms` : '0ms' }}
            >
              <Link
                activeClass="mobileSheetLinkActive"
                to={item.to}
                {...scrollOpts}
                offset={item.offset}
                className="mobileSheetLink"
                onClick={close}
                role="menuitem"
              >
                <span className="mobileSheetIndex">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{item.label}</span>
                <span className="mobileSheetArrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="contact"
          {...scrollOpts}
          offset={-40}
          className="mobileSheetCta"
          onClick={close}
          role="menuitem"
        >
          Get in touch
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
