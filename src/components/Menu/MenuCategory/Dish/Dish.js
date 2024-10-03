// @ts-nocheck
import "./Dish.css";
import createRipple from "../../../../utils/Ripple";
import React, { useState } from "react";
import Increment from "./Increment/Increment";
import Favorise from "./Favorise/Favorise";
import Modal from "../../../modal/Modal";
import DishModal from "./DishModal/DishModal";

function Dish(props) {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let isDecrement = false;
  let isIncrement = false;
  let isFavorised = false;
  function addDishToCommande(event) {
    createRipple.call(this, event);
    if (isDecrement) {
      isDecrement = false;
      return;
    }
    if (isIncrement) {
      isIncrement = false;
    } else if (isFavorised) {
      isFavorised = false;
      return;
    } else {
      setCount((count) => count + 1);
    }
    openModal();
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function handleIncrement() {
    isIncrement = true;
    setCount((count) => count + 1);
  }

  function handleFavorise() {
    isFavorised = true;
  }

  function handleDecrement(event) {
    isDecrement = true;
    props.onRemoveCommande(props.content._id);
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  return (
    <>
      <div className="dish-item" onClick={addDishToCommande}>
        <img
          src={props.content.image}
          alt={props.content.name}
          className="image-item"
        />
        <div className="dish-details">
          <h3 className="dish-title">{props.content.name}</h3>
          <p className="dish-ingredients">{props.content.ingredients}</p>
          <p className="dish-price">{props.content.price} €</p>
          <div className="dish-actions">
            <Increment
              count={count}
              increment={handleIncrement}
              decrement={handleDecrement}
            />
            <Favorise handleFavorise={handleFavorise} />
          </div>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={closeModal}>
        <DishModal dish={props.content} onClose={closeModal} onAddCommande={props.onAddCommande}/>
      </Modal>
    </>
  );
}

export default Dish;
