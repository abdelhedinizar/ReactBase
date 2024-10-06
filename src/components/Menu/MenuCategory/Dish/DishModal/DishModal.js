import { useState } from "react";
import Accompaniments from "./Accompaniments/Accompaniments";
import "./DishModal.css";

export default function DishModal({ dish, onClose, onAddCommande }) {
  const [selectedAccom, setSelectedAccom] = useState([]);

   const selectedAccomPrices = selectedAccom.map(accom => accom.price);
  const totalAccomPrice = selectedAccomPrices.reduce((acc, price) => acc + price, 0);
  const totalPrice = dish.price + totalAccomPrice;

  function AddOrder() {
    onAddCommande({
      dish: dish,
      owner: "Nizar",
      quantity: 1,
      totalPrice: totalPrice,
      status: "pending",
      ingredients: dish.ingredients,
    });
    onClose();
  }
  return (
    <div className="model-content">
      <img src={dish.image} alt={dish.name} className="model-image" />
      <div className="modal-details">
        <h2 className="model-title">{dish.name}</h2>
        <div>
          <p>
            <strong>Price:</strong> {totalPrice.toFixed(2)} €
          </p>
          <Accompaniments accompaniments={dish.Accompaniments} selectedAccom={selectedAccom} setSelectedAccom={setSelectedAccom} />
        </div>
        <div className="modal-footer">
          <button className="modal-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-add" onClick={AddOrder}>
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}
