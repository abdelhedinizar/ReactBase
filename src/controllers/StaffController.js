import { getOrdersOftheDay } from "../services/OrderServ";

const getPurchasesOftheDay = async (setOrders) => {
  const data = await getOrdersOftheDay();
  const orders = data.orders;
  setOrders(orders);
};

export { getPurchasesOftheDay };
