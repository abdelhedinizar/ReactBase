import "./Order.css";
import OrderItem from "../OrderItem/OrderItem";
function Order({ commande }) {
  const [commandeList, setCommandeList] = commande;

  return (
    <div className="content">
      <h2 className="titre">
        Your <span className="menucolor">Order</span>
      </h2>
      <div className="orders">
        {commandeList.map((orderItem, index) => (
          <OrderItem orderItem={orderItem} index={index} />
        ))}
      </div>
        <h3>
            Total:{" "}
            {commandeList.reduce((acc, orderItem) => acc + orderItem.totalPrice, 0)}
            €
            </h3>
    </div>
  );
}

export default Order;
