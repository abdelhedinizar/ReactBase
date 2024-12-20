import { useEffect, useState } from "react";
import Dish from "./Dish/Dish";

const MenuCategoryList = ({ category, dishes }) => {
  const [dishList, setDishList] = useState([]);
  useEffect(() => {
    setDishList(dishes?.filter((dish) => dish.category === category.name));
  }, [dishes, category]);
  return (
    <>
      <h3 className="category">{category.name}</h3>
      <div className="menu-content">
        {dishList?.length > 0 &&
          dishList.map((dish) => {
            return <Dish key={dish.id} dish={dish} />;
          })}
      </div>
    </>
  );
};

export default MenuCategoryList;
