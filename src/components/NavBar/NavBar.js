import React from "react";
import "./NavBar.css";

const NavBar = ({ logout, isAuthenticated, user }) => {
  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  const photoSrc = user
    ? isValidUrl(user?.photo)
      ? user.photo
      : `/images/${user?.photo}`
    : "/images/Default.jpg";

  return (
    <div className="navbar-layout open">
      <div className="user-section">
        <img className="user-image" src={photoSrc} alt="User" />
        <div className="welcome-message">
          Welcome {user?.name ? user.name : "Guest"}!
          <br />
          What you want to eat for today?
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      <div className="menu-section">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/commande">commande</a>
            </li>

            <li>
              <a href="/purchases">my purchases</a>
            </li>
            <li>
              <a href="/favorites">favorite dishes</a>
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
      </div>
    </div>
  );
};

export default NavBar;
