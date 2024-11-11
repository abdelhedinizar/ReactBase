import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOrderBySessionId } from "../../../services/OrderServ";
import './OrderSuccess.css';

const OrderSuccess = () => {
  const location = useLocation();
  const [status, setStatus] = useState("loading");
  const [order, setOrder] = useState();

  // Extract session_id from the URL
  const session_id = new URLSearchParams(location.search).get("session_id");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const data = await getOrderBySessionId(session_id);
        setOrder(data.orders[0]);
        if(!data.orders) {
          setStatus("invalid");
          return;
        }
        if (data.orders[0].paymentStatus === "paid") {
          setStatus("paid");
        } else {
          setStatus("unpaid");
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
        setStatus("error");
      }
    };

    if (session_id) {
      verifyPayment();
    } else {
      setStatus("invalid");
    }
  }, [session_id]);

  return (
  <div className="order-status-container">
    {status === "paid" && (
      <div className="order-success">
        <h2>🎉 Thank you!</h2>
        <p>Your payment was successful, and your order is confirmed.</p>
        <div className="order-details-success">
          <p><strong>Order Number:</strong> #{order.sequenceNumber}</p>
        </div>
        <p>You will receive a confirmation email shortly.</p>
      </div>
    )}
    {status === "unpaid" && (
      <div className="order-failure">
        <h2>⚠️ Payment Verification Failed</h2>
        <p>Please contact our support team if you need assistance.</p>
      </div>
    )}
    {status === "error" && (
      <div className="order-error">
        <h2>❌ An Error Occurred</h2>
        <p>Something went wrong with your transaction. Please try again later.</p>
      </div>
    )}
    {status === "invalid" && (
      <div className="order-invalid">
        <h2>🚫 Invalid Session</h2>
        <p>Please use a valid link to view your order status.</p>
      </div>
    )}
  </div>
);
};

export default OrderSuccess;
