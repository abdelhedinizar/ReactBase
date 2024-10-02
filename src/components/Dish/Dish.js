import "./Dish.css";
import createRipple from "../../utils/Ripple";
import React, { useState } from "react";
import Increment from "../Increment/Increment";
import Favorise from "../Favorise/Favorise";

function Dish(props) {
  const [count, setCount] = useState(0);
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
    }
    if(isFavorised) {
      isFavorised = false;
      return;
    } else {
      setCount((count) => count + 1);
    }
    props.onAddCommande({
      dish: props.content,
      owner: "Nizar",
      quantity: 1,
      totalPrice: props.content.price,
      status: "pending",
      ingredients: props.content.ingredients,
    });
  }

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
  );
}

export default Dish;
