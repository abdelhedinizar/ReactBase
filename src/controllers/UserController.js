import { getMyCurrentOrders } from "../services/OrderServ";

const getYourPurchase = async (user, setOrders) => {
  if (user) {
    const data = await getMyCurrentOrders(user);
    const orders = data.orders;
    setOrders(orders);
  }
};

export { getYourPurchase };
