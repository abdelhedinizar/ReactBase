import "./Menu.css";
import Dish from "./../Dish/Dish";
import React, { useState, useEffect } from "react";

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
