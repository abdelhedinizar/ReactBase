import "./OrderItem.css";

function OrderItem({ orderItem, index }) {
  return (
    <div key={index} className="order-item">
      <img
        src={orderItem.dish.image}
        alt={orderItem.dish.name}
        className="image"
      />
      <div className="order-details">
        <div className="order-title">{orderItem.dish.name}</div>
        <div className="order-ingredients">{orderItem.dish.ingredients}</div>
        <div className="order-price">{orderItem.totalPrice} €</div>
      </div>
    </div>
  );
}

export default OrderItem;
