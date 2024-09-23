import React from "react";
import "./CartShoppingButton.css";

const CartShoppingButton = ({ notificationCount }) => {
  return (
    <div className="cart-icon-container">
      <i className="fa-solid fa-cart-shopping"></i>
      {notificationCount > 0 && (
        <span className="notification-badge">{notificationCount}</span>
      )}
    </div>
  );
};

export default CartShoppingButton;
