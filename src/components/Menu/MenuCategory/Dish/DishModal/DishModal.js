import "./DishModal.css";

export default function DishModal({ dish }) {
  return (
    <>
      <h2 className="model-title">{dish.name}</h2>
      <p>You can put any content here, including forms or other components.</p>
    </>
  );
}
