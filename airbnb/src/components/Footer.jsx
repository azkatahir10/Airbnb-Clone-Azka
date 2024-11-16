import React from 'react';
import '../scss/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__links">
      <a href="/support">Support</a>
      <a href="/community">Community</a>
      <a href="/hosting">Hosting</a>
      <a href="/about">About</a>
    </div>
    <div className="footer__social">
      <span>&copy; 2024 Airbnb Clone</span>
    </div>
  </footer>
);

export default Footer;
