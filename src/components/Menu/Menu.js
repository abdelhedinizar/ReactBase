import "./Menu.css";
import React, { useState, useEffect } from "react";
import CommandeContr from "../../controllers/Commande";
import { fetchDishList } from "../../services/DishsServ";
import MenuCategory from "../MenuCategory/MenuCategory";

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
      <MenuCategory
        category="Pizza"
        dishes={dishList}
        onAddCommande={handleAddCommande}
        onRemoveCommande={handleRemoveLastCommande}
      />
      <MenuCategory
        category="Pasta"
        dishes={dishList}
        onAddCommande={handleAddCommande}
        onRemoveCommande={handleRemoveLastCommande}
      />
      <MenuCategory
        category="Burgers"
        dishes={dishList}
        onAddCommande={handleAddCommande}
        onRemoveCommande={handleRemoveLastCommande}
      />
    </main>
  );
}

export default Menu;
