import "./DishModal.css";

export default function DishModal({ dish, onClose, onAddCommande }) {
  function AddOrder() {
    onAddCommande({
      dish: dish,
      owner: "Nizar",
      quantity: 1,
      totalPrice: dish.price,
      status: "pending",
      ingredients: dish.ingredients,
    });
    onClose();
  }
  return (
    <>
      <h2 className="model-title">{dish.name}</h2>
      <p>
        <strong>Price:</strong> {dish.price} €
      </p>
      <div>
        <button className="modal-cancel" onClick={onClose}>
          Cancel
        </button>
        <button className="modal-add" onClick={AddOrder}>
          Add to Order
        </button>
      </div>
    </>
  );
}
