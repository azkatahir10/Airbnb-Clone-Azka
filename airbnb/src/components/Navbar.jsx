import React from 'react';
import '../scss/Navbar.scss'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__logo">Airbnb</div>
    <div className="navbar__links">
      <a href="/">Home</a>
      <a href="/experiences">Experiences</a>
      <a href="/online-experiences">Online Experiences</a>
    </div>
    <div className="navbar__user-menu">
      <button>Login</button>
      <button>Signup</button>
    </div>
  </nav>
);

export default Navbar;
