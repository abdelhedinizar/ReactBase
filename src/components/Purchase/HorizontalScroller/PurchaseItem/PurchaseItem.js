import "./PurchaseItem.css";
import formatCreatedAt from "../../../../utils/TimeUtils.js";
const PurchaseItem = ({ order }) => {
  const { _id, sequenceNumber, totalPrice, dishes, status, createdAt } = order;

  return (
    <div className="compact-card">
      {/* Image Header */}
      <div className="card-header">
        <img
          src={dishes[0]?.dish?.image}
          alt={`Order ${_id}`}
          className="header-image"
        />
        <div className={`status-badge ${order.status.toLowerCase()}`}>
          {status}
        </div>
      </div>

      {/* Content Section */}
      <div className="card-content">
        <div className="info-row">
          <h2>Table {sequenceNumber}</h2>
          <span className="order-id">Order #{sequenceNumber}</span>
        </div>

        {/* Items as Badges */}
            <div className="items-badges">
            {dishes.map((item, index) => (
              <span key={index} className="item-badge">
                {item.dish.name}
              </span>
            ))}
          </div>
        {/* Total Price and Time */}
        <div className="details">
          <p className="total-price">
            <strong>${totalPrice.toFixed(2)}</strong>
          </p>
          <p className="time">{formatCreatedAt(createdAt)}</p>
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

export default PurchaseItem;
