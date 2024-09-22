// src/components/NavBar.js

import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav >
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
