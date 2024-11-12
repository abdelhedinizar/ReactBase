// src/components/NavBar.js

import React from "react";
import "./NavBar.css";

const NavBar = ({ logout, isAuthenticated }) => {
  return (
    <>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/commande">commande</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          {isAuthenticated ? (
            <li onClick={logout}>
              <a href="/login">Logout</a>
            </li>
          ) : (
            <li>
              <a href="/login">Log in</a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
