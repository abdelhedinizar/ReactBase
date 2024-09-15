import "./Menu.css";
import Dish from "./../Dish/Dish";
import React, { useState, useEffect } from "react";
import CommandeContr from "../../controllers/Commande";
import { fetchDishList } from "../../services/DishsServ";

function Menu() {
  const [dishList, setDishList] = useState([]);
  const [commande, setCommande] = useState([]);

  function handleAddCommande(commandeDish) {
    CommandeContr.addCommande.call(this, [commande, setCommande], commandeDish);
  }

  function handleRemoveLastCommande(dishId) {
    CommandeContr.removeLastCommande.call(
      this,
      [commande, setCommande],
      dishId
    );
  }

  useEffect(() => {
    const getDishList = async () => {
      const dishes = await fetchDishList();
      setDishList(dishes);
    };
    getDishList();
  }, []);
  return (
    <main>
      <h2>
        Our <span className="menucolor">Menu</span>
      </h2>
      <div className="menu-content">
        {dishList.length > 0 &&
          dishList.map((dish) => {
            return (
              <Dish
                content={dish}
                key={dish.name}
                onAddCommande={handleAddCommande}
                onRemoveCommande={handleRemoveLastCommande}
              />
            );
          })}
      </div>
    </main>
  );
}

export default Menu;
