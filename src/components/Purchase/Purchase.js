import "./Purchase.css";

const Purchase = () => {
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

  const OrderCard = ({ order }) => {
    const { id, tableNumber, items, totalPrice, status, orderTime, imageUrl } =
      order;

    return (
      <div className="compact-card">
        {/* Image Header */}
        <div className="card-header">
          <img src={imageUrl} alt={`Order ${id}`} className="header-image" />
          <div className={`status-badge ${status.toLowerCase()}`}>{status}</div>
        </div>

        {/* Content Section */}
        <div className="card-content">
          <div className="info-row">
            <h2>Table {tableNumber}</h2>
            <span className="order-id">Order #{id}</span>
          </div>

          {/* Items as Badges */}
          <div className="items-badges">
            {items.map((item, index) => (
              <span key={index} className="item-badge">
                {item.name}
              </span>
            ))}
          </div>

          {/* Total Price and Time */}
          <div className="details">
            <p className="total-price">
              <strong>${totalPrice.toFixed(2)}</strong>
            </p>
            <p className="time">{orderTime}</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="card-actions">
          <button className="action-btn">View</button>
          <button className="complete-btn">Complete</button>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <OrderCard order={sampleOrder} />
      <OrderCard order={secondOrder} />
      <OrderCard order={third} />
    </div>
  );
};

export default Purchase;
