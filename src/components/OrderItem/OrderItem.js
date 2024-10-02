import React, { useState } from "react";
import "./OrderItem.css";

function OrderItem({ orderItem, index, onDelete }) {
  const handleDelete = () => {
    onDelete(orderItem); // Trigger the delete function passed as a prop
  };

  const handleSwipe = () => {
    setSwiped(true);
  };

  const handleSwipeCancel = () => {
    setSwiped(false);
  };

  const [swiped, setSwiped] = useState(false);
  return (
    <div
      key={index}
      className={`order-item ${swiped ? "swiped" : ""}`}
      onTouchStart={handleSwipeCancel}
    >
      <img
        src={orderItem.dish.image}
        alt={orderItem.dish.name}
        className="image"
      />
      <div className="order-details">
        <div className="order-title">{orderItem.dish.name}</div>
        <div className="order-ingredients">{orderItem.dish.ingredients}</div>
        <div className="order-price">{orderItem.totalPrice} €</div>
      </div>
      <button className="delete-button" onClick={handleDelete}>
        X
      </button>

      <div
        className={`swipe-delete ${swiped ? "visible" : ""}`}
        onClick={handleDelete}
      >
        <span className="delete-icon">X</span>
      </div>
    </div>
  );
}

export default OrderItem;
