const createOrder = async (orderData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

const createSession = async (orderId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/bookings/checkout-seesion/${orderId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.session.url;
  } catch (error) {
    console.error("Error fetching dish list:", error);
    throw error;
  }
};

const getOrderBySessionId = async (sessionId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/orders?sessionId=${sessionId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching dish list:", error);
    throw error;
  }
};
const getMyCurrentOrders = async (user) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/orders?user=${user._id}&sort=-createdAt`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching dish list:", error);
    throw error;
  }
};

const getOrdersOftheDay = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACK_API_URL}/orders?createdAt=today&sort=createdAt`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching dish list:", error);
    throw error;
  }
};
export {
  createOrder,
  createSession,
  getOrderBySessionId,
  getMyCurrentOrders,
  getOrdersOftheDay,
};
