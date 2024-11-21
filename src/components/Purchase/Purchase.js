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

  return (
    <div className="purchase-container">
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
