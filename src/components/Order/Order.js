import "./Order.css";
import OrderItem from "./OrderItem/OrderItem";
import { createOrder, createSession } from "../../services/OrderServ";

function Order({ commande, user }) {
  const [commandeList, setCommandeList] = commande;
  const handleDelete = (orderItem) => {
    const newCommandeList = commandeList.filter(
      (item) => item.dish._id !== orderItem.dish._id
    );
    setCommandeList(newCommandeList);
    sessionStorage.setItem("commandeDish", JSON.stringify(newCommandeList));
  };

  const orderCommande = async () => {
    let dishs = commandeList.map((commandeDish) => {
      return {
        dish: commandeDish.dish._id,
        quantity: commandeDish.quantity,
        price: commandeDish.totalPrice,
        addedAccompaniments: commandeDish.addedAccompaniments.map((acc) => {
          return {
            accompaniment: acc._id,
            quantity: acc.quantity,
            price: acc.price,
          };
        }),
      };
    });
    sessionStorage.setItem("commandeDish", JSON.stringify(commandeList));
    if (user) {
      let orderData = {
        user: user._id,
        dishes: dishs,
        paymentMethod: "card",
      };
      const order = await createOrder(orderData);
      sessionStorage.setItem("order", order);
      window.location.href = await createSession(order.data.order.id);
    } else {
      window.location.href = "/login";
    }
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
      <button className="fixed-button" onClick={orderCommande}>
        Order now !
      </button>
    </div>
  );
}

export default Order;
