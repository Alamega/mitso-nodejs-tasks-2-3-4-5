const productsRepo = require('./product.memory.repository');
const ordersRepo = require('../orders/order.memory.repository');

const getAll = () => productsRepo.getAll();

const getById = (id) => productsRepo.getById(id);

const createProduct = ({ fullName, address, numberPhone, bonusCard }) => productsRepo.createProduct({ fullName, address, numberPhone, bonusCard });

const deleteById = async (id) => {
  const userDeletable = await getById(id);
  productsRepo.deleteById(id);
  ordersRepo.removeByUserId(id); // TODO
  return userDeletable; 
};

const updateById = ({ id, fullName, address, numberPhone, bonusCard }) => productsRepo.updateById({ id, fullName, address, numberPhone, bonusCard });

module.exports = { getAll, getById, createProduct, deleteById, updateById };