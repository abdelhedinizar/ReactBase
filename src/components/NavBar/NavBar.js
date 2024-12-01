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

      <div className="divider"></div>

      <div className="menu-section">
        <nav>
          <ul className="nav-links">
            <li>
              <div className="nav-item">
                <i className="fa-solid fa-house icon"></i>
                <a href="/">Home</a>
              </div>
            </li>
            {user?.role === "admin" && (
              <>
                <li>
                  <div className="nav-item">
                    <i className="fa-solid fa-chart-line icon"></i>
                    <a href="/dashboard">Dashboard</a>
                  </div>
                </li>
                <li>
                  <div className="nav-item">
                    <i className="fa-solid fa-gear icon"></i>
                    <a href="/settings">Settings</a>
                  </div>
                </li>
              </>
            )}
            {(user?.role === "Staff" || user?.role === "admin") && (
              <>
                <li>
                  <div className="nav-item">
                    <i className="fa-solid fa-chart-line icon"></i>
                    <a href="/purchases">Purchases</a>
                  </div>
                </li>
              </>
            )}
            <li>
              <div className="nav-item">
                <i className="fa-solid fa-utensils icon"></i>
                <a href="/commande">Commande</a>
              </div>
            </li>
            <li>
              <div className="nav-item">
                <i className="fa-solid fa-receipt icon"></i>
                <a href="/myPurchases">My Purchases</a>
              </div>
            </li>
            <li>
              <div className="nav-item">
                <i className="fa-solid fa-heart icon"></i>
                <a href="/favorites">Favorite Dishes</a>
              </div>
            </li>
            {isAuthenticated ? (
              <li onClick={logout}>
                <div className="nav-item">
                  <i className="fa-solid fa-sign-out-alt icon"></i>
                  <a href="/login">Logout</a>
                </div>
              </li>
            ) : (
              <li>
                <div className="nav-item">
                  <i className="fa-solid fa-sign-in-alt icon"></i>
                  <a href="/login">Log in</a>
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
