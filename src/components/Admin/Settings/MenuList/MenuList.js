import { useEffect } from "react";
import { useState } from "react";
import { fetchcategorieList } from "../../../../services/CategorieServ";
import MenuCategoryList from "./MenuCategoryList/MenuCategoryList";

const MenuList = ({ dishes }) => {
  const [categorieList, setCategoryList] = useState([]);

  const onAddCategory = () => {};

  useEffect(() => {
    const getCategoriesList = async () => {
      const categoriesResp = await fetchcategorieList();
      setCategoryList(categoriesResp);
    };
    getCategoriesList();
  }, [setCategoryList]);

  return (
    <>
      {categorieList?.length > 0 &&
        categorieList.map((category) => {
          return (
            <div>
              <MenuCategoryList
                key={category.id}
                category={category}
                dishes={dishes}
              ></MenuCategoryList>
            </div>
          );
        })}
      <button className="add-staff-button" onClick={onAddCategory}>
        Ajouter une catégorie
      </button>
    </>
  );
};

export default MenuList;
