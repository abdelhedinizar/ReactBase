import React, { useEffect, useState } from "react";
import "./Purchase.css";

const Purchase = ({ user, children, purchases, from }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (from === "myPurchases") {
      purchases(user, setOrders);
    } else {
      purchases(setOrders);
    }
  }, [user, from, purchases]);

  return (
    <div className="purchase">
      <div className="scroll-container">
        {orders.map((order) =>
          React.Children.map(children, (child) =>
            React.cloneElement(child, { order, key: order._id })
          )
        )}
      </div>
    </div>
  );
};

export default Purchase;
