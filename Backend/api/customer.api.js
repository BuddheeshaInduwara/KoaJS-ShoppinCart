const { Inventory, Cart, WishList } = require('../dal')

const getAllItems = () => {
  return [...Inventory]
}

const addToCart = (item) => {
  const cartItem = Cart.get(item.id)
  if (cartItem) {
    if (cartItem?.count) {
      cartItem.count = Number(cartItem.count) + 1
    } else {
      cartItem.count = 2
    }

    Cart.set(item.id, cartItem)
    return cartItem
  } else {
    Cart.set(item.id, item)
    return item
  }
}

const addToWishList = (item) => {
  WishList.set(item.id, item)
  return item
}

const getCartItems = () => {
  return [...Cart]
}

const getWishListItems = () => {
  return [...WishList]
}

const removeWishListItem = (id) => {
  WishList.delete(id)
  return
}

const removeCartItems = () => {
  Cart.clear()
  return
}

module.exports = {
  getAllItems,
  addToCart,
  addToWishList,
  getCartItems,
  getWishListItems,
  removeWishListItem,
  removeCartItems,
}
