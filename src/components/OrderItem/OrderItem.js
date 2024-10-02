import React, { useState, useRef, useEffect } from "react";
import "./OrderItem.css";

function OrderItem({ orderItem, index, onDelete }) {
  const [swiped, setSwiped] = useState(false);
  const [intro, setIntro] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleDelete = () => {
    onDelete(orderItem);
    setSwiped(false);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;

    // If swipe distance is more than 50px to the left, set swiped to true
    if (difference > 50) {
      setSwiped(true);
    }

    // If swipe distance is more than 50px to the right, set swiped to false (go back to original state)
    if (difference < -50) {
      setSwiped(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false); // Remove intro class after animation finishes
    }, 1000); // Animation duration (matches the CSS animation)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div
      key={index}
      className={`order-item ${swiped ? "swiped" : ""} ${intro ? "intro" : ""}`}
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
