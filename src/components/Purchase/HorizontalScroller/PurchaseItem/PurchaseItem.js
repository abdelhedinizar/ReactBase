import "./PurchaseItem.css";
import formatCreatedAt from "../../../../utils/TimeUtils.js";
import { updateOrderStatus } from "../../../../services/OrderServ";
import { useState } from "react";
const PurchaseItem = ({ order }) => {
  const { _id, sequenceNumber, totalPrice, dishes, status, createdAt } = order;
  const [orderStatus, setOrderStatus] = useState(order.status);
  const [isLoading, setIsLoading] = useState(false);

  const nextStatusButtonLabel = () => {
    switch (orderStatus) {
      case "pending":
        return "inProgress";
      case "inProgress":
        return "Processe";
      case "Processing":
        return "Dispatche";
      case "Dispatched":
        return "complete";
      case "completed":
        return "completed";
      default:
        return "Unknown status";
    }
  };

  const nextStatus = () => {
    switch (orderStatus) {
      case "pending":
        return "inProgress";
      case "inProgress":
        return "Processing";
      case "Processing":
        return "Dispatched";
      case "Dispatched":
        return "completed";
      case "completed":
        return "completed";
      default:
        return "Unknown status";
    }
  };

  const goTotheNextStatus = async () => {
    if (orderStatus === "completed") return;
    setIsLoading(true);
    order.status = nextStatus();
    setOrderStatus(order.status);
    await updateOrderStatus(order);
    setIsLoading(false);
  };

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
        <button
          className="complete-btn"
          disabled={isLoading}
          onClick={goTotheNextStatus}
        >
          {isLoading ? (
            <>
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </>
          ) : (
            nextStatusButtonLabel(orderStatus)
          )}
        </button>
      </div>
    </div>
  );
};

export default PurchaseItem;
