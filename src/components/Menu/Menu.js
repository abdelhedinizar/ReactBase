import "./Menu.css";
import React, { useEffect, useState } from "react";
import CommandeContr from "../../controllers/Commande";
import { fetchDishList } from "../../services/DishsServ";
import MenuCategory from "./MenuCategory/MenuCategory";
import createRipple from "../../utils/Ripple";
import { useNavigate } from "react-router-dom";
import DiscussionModal from "./DiscussionModal/DiscussionModal";
import Modal from "../modal/Modal";

function Menu({ dishes, commandeDishs, user }) {
  const navigate = useNavigate();
  const [dishList, setDishList] = dishes;
  const [commande, setCommande] = commandeDishs;
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddCommande(commandeDish) {
    CommandeContr.addCommande.call(this, [commande, setCommande], commandeDish);
  }

  function handleValidCommande(event) {
    createRipple.call(this, event);
    navigate("/commande");
  }

  function handleRemoveLastCommande(dishId) {
    CommandeContr.removeLastCommande.call(
      this,
      [commande, setCommande],
      dishId
    );
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getDishList = async () => {
      const dishesResp = await fetchDishList();
      setDishList(dishesResp);
    };
    getDishList();
  }, [setDishList]);
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
        user={user}
      />
      <MenuCategory
        category="Pasta"
        dishes={dishList}
        onAddCommande={handleAddCommande}
        onRemoveCommande={handleRemoveLastCommande}
        user={user}
      />
      <MenuCategory
        category="Burgers"
        dishes={dishList}
        onAddCommande={handleAddCommande}
        onRemoveCommande={handleRemoveLastCommande}
        user={user}
      />
      <button className="fixed-button" onClick={handleValidCommande}>
        Order
      </button>

      <button className="bot-button" onClick={() => openModal()}>
        <i class="fa-solid fa-comment"></i>
      </button>

      <Modal show={isModalOpen} onClose={closeModal}>
        <DiscussionModal />
      </Modal>
    </main>
  );
}

export default Menu;
