import React, { useState } from "react";
import NavBarButton from "./NavBarButton/NavBarButton";
import "./Header.css";
import CartShoppingButton from "./CartShoppingButton/CartShoppingButton";
import LoginButton from "./LoginButton/LoginButton";
import ProfilButton from "./ProfilButton/ProfilButton";

function Header({ onToggleNavBar, commande, isAuthenticated }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function navbarClick() {
    setIsMenuOpen(!isMenuOpen);
    onToggleNavBar();
  }

  return (
    <header className="header">
      <NavBarButton onToggleNavBar={navbarClick} isMenuOpen={isMenuOpen} />
      <h1>Pizza Di Napoli</h1>
      <div>
        {isAuthenticated ? <ProfilButton /> : <LoginButton />}

        <CartShoppingButton notificationCount={commande.length} />
      </div>
    </header>
  );
}

export default Header;
