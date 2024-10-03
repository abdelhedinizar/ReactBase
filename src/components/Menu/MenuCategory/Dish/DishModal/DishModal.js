import "./DishModal.css";

export default function DishModal({ dish }) {
  return (
    <>
      <h2 className="model-title">{dish.name}</h2>
       <p>
        <strong>Price:</strong> {dish.price} €
      </p>
      <div>
        <button className="modal-cancel">Cancel</button>
        <button className="modal-add">Add to Order</button>
      </div>
    </>
  );
}
