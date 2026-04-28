import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const navItems = [
  { to: 'intro', label: 'Home', offset: -100 },
  { to: 'skills', label: 'About', offset: -50 },
  { to: 'works', label: 'Portfolio', offset: -50 },
  { to: 'clients', label: 'Clients', offset: -50 },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Krishna Sanaka logo" className="logo" />

      <div className="desktopMenu">
        {navItems.map((item) => (
          <Link
            key={item.to}
            activeClass="active"
            to={item.to}
            spy={true}
            smooth={true}
            offset={item.offset}
            duration={500}
            className="desktopMenuListItem"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
        <button type="button" className="desktopMenuBtn">
          <img src={contactImg} alt="" className="desktopMenuImg" />
          Contact Me
        </button>
      </Link>

      <button
        type="button"
        className="mobMenuBtn"
        aria-label="Toggle navigation menu"
        aria-expanded={showMenu}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <img src={menu} alt="" className="mobMenu" />
      </button>

      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        {navItems.map((item) => (
          <Link
            key={item.to}
            activeClass="active"
            to={item.to}
            spy={true}
            smooth={true}
            offset={item.offset}
            duration={500}
            className="listItem"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
