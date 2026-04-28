import React, { useState } from 'react';
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

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const close = () => setShowMenu(false);

  return (
    <header className="navWrap">
      <nav className="navPill">
        <img src={avatar} alt="Krishna Sanaka" className="navAvatar" />

        <ul className="navList">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                activeClass="navLinkActive"
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                className="navLink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="contact" smooth={true} offset={-40} duration={500}>
          <button type="button" className="navContactBtn">Contact</button>
        </Link>

        <button
          type="button"
          className="navBurger"
          aria-label="Toggle navigation menu"
          aria-expanded={showMenu}
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {showMenu && (
        <div className="mobileSheet" role="menu">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              offset={item.offset}
              duration={500}
              className="mobileSheetLink"
              onClick={close}
              role="menuitem"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            offset={-40}
            duration={500}
            className="mobileSheetLink mobileSheetLinkPrimary"
            onClick={close}
            role="menuitem"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
