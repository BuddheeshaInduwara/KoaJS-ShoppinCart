const { v4: uuidv4 } = require('uuid')
const { Inventory, Users } = require('../dal')

const addItem = ({ name, price }) => {
  const id = uuidv4()

  const item = {
    id,
    name,
    price,
  }

  Inventory.set(id, item)
  return item
}

const editItem = ({ id, name, price }) => {
  const item = {
    id,
    name,
    price,
  }

  Inventory.set(id, item)
  return item
}

const getInventoryItems = () => {
  return [...Inventory]
}

const getAllCustomers = () => {
  return [...Users]
}

const addPromotions = (id, item) => {
  Inventory.set(id, item)
  return
}

module.exports = {
  addItem,
  editItem,
  getInventoryItems,
  getAllCustomers,
  addPromotions,
}
