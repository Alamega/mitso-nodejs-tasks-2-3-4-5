const Order = require('./order.model');

const Orders = [new Order()];

const getAll = async () => Orders;

const getById = async (id) => Orders.find((order) => order.id === id);

const createOrder = async ({ id, orderNumber, numbers, clientId, productsId }) => {
  const order = new Order({ id, orderNumber, numbers, clientId, productsId });
  Orders.push(order);
  return order;
};

const deleteById = async (id) => {
  const orderPosition = Orders.findIndex((order) => order.id === id);

  if (orderPosition === -1) return null;

  const orderDeletable = Orders[orderPosition];

  Orders.splice(orderPosition, 1);
  return orderDeletable;
};

const updateById = async ({ id, orderNumber, numbers, clientId, productsId }) => {
  const orderPosition = Orders.findIndex((order) => order.id === id);

  if (orderPosition === -1) return null;

  const oldOrder = Orders[orderPosition];
  const newOrder = { ...oldOrder, orderNumber, numbers, clientId, productsId };

  Orders.splice(orderPosition, 1, newOrder);
  return newOrder;
};

// const removeUserById = async (id) => {
//   const userOrders = Orders.filter((order) => order.userId === id);
//   await Promise.allSettled(userOrders.map(async (order) => updateById({ id: order.id, userId: null }))
//   );
// };

// const deleteByBoardId = async (boardId) => {
//   const boardTasks = Orders.filter((order) => order.boardId === boardId);
//   await Promise.allSettled(boardTasks.map(async (order) => deleteById(order.id)));
// };

module.exports = {
  Orders,
  getAll,
  getById,
  createOrder,
  deleteById,
  updateById,
//   removeUserById,
//   deleteByBoardId,
};