import React, { useState, useRef } from "react";
import "./OrderItem.css";

function OrderItem({ orderItem, index, onDelete }) {
  const [swiped, setSwiped] = useState(false);
  const touchStartX = useRef(0);

  const handleDelete = () => {
    onDelete(orderItem); // Trigger the delete function passed as a prop
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    // If swipe distance is more than 50px to the left, trigger swipe action
    if (difference > 50) {
      setSwiped(true);
    }
  };

  const handleTouchEnd = () => {
    if (!swiped) {
      setSwiped(false); // If swipe was not completed, reset
    }
  };

  return (
    <div
      key={index}
      className={`order-item ${swiped ? "swiped" : ""}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
