import React, { useState } from "react";
import NavBarButton from "../NavBarButton/NavBarButton";
import "./Header.css";
import CartShoppingButton from "../CartShoppingButton/CartShoppingButton";

function Header({ onToggleNavBar, commande }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function navbarClick() {
    setIsMenuOpen(!isMenuOpen);
    onToggleNavBar();
  }

  return (
    <header className="header">
      <NavBarButton onToggleNavBar={navbarClick} isMenuOpen={isMenuOpen} />
      <h1>Pizza Di Napoli</h1>
      <p>
        <CartShoppingButton notificationCount={commande.length} />
      </p>
    </header>
  );
}

export default Header;
