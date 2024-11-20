import { useEffect, useState } from "react";
//import HorizontalScroller from "./HorizontalScroller/HorizontalScroller";
import PurchaseItem from "./HorizontalScroller/PurchaseItem/PurchaseItem";
import { getMyCurrentOrders } from "../../services/OrderServ";
import "./Purchase.css";

const Purchase = ({ user }) => {
  const [orders, setOrders] = useState([]);

  const getYourPurchase = async () => {
    const data = await getMyCurrentOrders(user);
    const orders = data.orders;
    setOrders(orders);
  };

  useEffect(() => {
    if (user) {
      getYourPurchase();
    }
  });

  /*
  const sampleOrder = {
    id: 789,
    tableNumber: 12,
    items: [
      { name: "Grilled Chicken" },
      { name: "French Fries" },
      { name: "Lemonade" },
    ],
    totalPrice: 34.99,
    status: "pending",
    orderTime: "8:15 PM",
    imageUrl: "/images/pizza.jpg",
  };

  const secondOrder = {
    id: 12,
    tableNumber: 12,
    items: [
      { name: "Grilled Chicken" },
      { name: "French Fries" },
      { name: "Lemonade" },
    ],
    totalPrice: 34.99,
    status: "completed",
    orderTime: "8:15 PM",
    imageUrl: "/images/pepperoni.jpg",
  };

  const third = {
    id: 789,
    tableNumber: 12,
    items: [
      { name: "Grilled Chicken" },
      { name: "French Fries" },
      { name: "Lemonade" },
      { name: "Apple Pie" },
    ],
    totalPrice: 34.99,
    status: "Pending",
    orderTime: "8:15 PM",
    imageUrl: "/images/ravioli.jpg",
  };
*/
  return (
    <div className="purchase-container"
    >
      {orders?.length > 0 &&
        orders.map((order) => {
          return <PurchaseItem order={order} key={order._id} />;
        })}


      {/*
    <HorizontalScroller dishes={dishes}></HorizontalScroller>
     */}
    </div>
  );
};

export default Purchase;
