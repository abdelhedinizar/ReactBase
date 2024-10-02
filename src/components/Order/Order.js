import "./Order.css";
import OrderItem from "../OrderItem/OrderItem";
function Order({ commande }) {
  const [commandeList, setCommandeList] = commande;

  const handleDelete = (orderItem) => {
    setCommandeList(
      commandeList.filter((item) => item.dish._id !== orderItem.dish._id)
    );
  };

  return (
    <div className="content">
      <h2 className="titre">
        Your <span className="menucolor">Order</span>
      </h2>
      <div className="orders">
        {commandeList.map((orderItem, index) => (
          <OrderItem
            key={index}
            orderItem={orderItem}
            index={index}
            onDelete={handleDelete}
          />
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
