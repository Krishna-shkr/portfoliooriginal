import React from 'react';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      Copyright &copy; {year} Krishna Sanaka. All rights reserved.
    </footer>
  );
};

export default Footer;
