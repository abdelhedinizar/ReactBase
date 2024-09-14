import "./Menu.css";
import React, { useState, useEffect } from "react";


function Dish(props) {
  return (
    <div className="dish-item">
      <img
        src={props.content.image}
        alt={props.content.name}
        className="image-item"
      />
      <div className="dish-details">
        <h3 className="dish-title">{props.content.name}</h3>
        <p className="dish-ingredients">{props.content.ingredients}</p>
        <p className="dish-price">{props.content.price}</p>
      </div>
    </div>
  );
}

function Menu() {
  const [dishList, setDishList] = useState([]);
  console.log(process.env);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_API_URL}/dishs`)
      .then((response) => response.json())
      .then((data) => setDishList(data.data.Dishs))
      .catch((error) => console.error("Error fetching dish list:", error));
  }, []);
  return (
    <main>
      <h2>
        Our <span className="menucolor">Menu</span>
      </h2>
      <div className="menu-content">
        {dishList.length > 0 &&
          dishList.map((dish) => {
            return <Dish content={dish} key={dish.name} />;
          })}
      </div>
    </main>
  );
}

export default Menu;
