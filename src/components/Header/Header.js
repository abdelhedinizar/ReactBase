import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function navbarClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <div className={`menu ${isMenuOpen ? "openmenu" : ""}`} onClick={navbarClick}>
        <div>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>
      <h1>Pizza Di Napoli</h1>
      <p></p>
    </header>
  );
}

export default Header;