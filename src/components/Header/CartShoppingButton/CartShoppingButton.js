import React from "react";
import "./CartShoppingButton.css";
import createRipple from "../../../utils/Ripple";
import { useNavigate } from "react-router-dom";

const CartShoppingButton = ({ notificationCount }) => {
  const navigate = useNavigate();

  function handleValidCommande(event) {
    createRipple.call(this, event);
    navigate("/commande");
  }

  return (
    <div className="cart-icon-container" onClick={handleValidCommande}>
      <i className="fa-solid fa-cart-shopping"></i>
      {notificationCount > 0 && (
        <span className="notification-badge">{notificationCount}</span>
      )}
    </div>
  );
};

export default CartShoppingButton;
