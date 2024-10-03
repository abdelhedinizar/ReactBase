import "./MenuCategory.css";
import Dish from "./Dish/Dish";
import React, { useState, useEffect } from "react";

export default function MenuCategory({
  category,
  dishes,
  onAddCommande,
  onRemoveCommande,
}) {
  const [dishList, setDishList] = useState([]);
  useEffect(() => {
    setDishList(dishes?.filter((dish) => dish.category === category));
  }, [dishes, category]);
  return (
    <>
      <h3 className="category">{category}</h3>
      <div className="menu-content">
        {dishList?.length > 0 &&
          dishList.map((dish) => {
            return (
              <Dish
                content={dish}
                key={dish.name}
                onAddCommande={onAddCommande}
                onRemoveCommande={onRemoveCommande}
              />
            );
          })}
      </div>
    </>
  );
}
