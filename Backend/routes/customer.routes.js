const Router = require('@koa/router')

const {
  getAllItems,
  addToCart,
  addToWishList,
  getCartItems,
  getWishListItems,
  removeWishListItem,
  removeCartItems,
} = require('../api/customer.api')

const router = new Router({
  prefix: '/customer',
})

router.get('/', (ctx) => {
  ctx.response.status = 200
  ctx.body = getAllItems()
})

router.post('/cart', (ctx) => {
  const item = ctx.request.body
  ctx.response.status = 200
  ctx.body = addToCart(item)
})

router.get('/cart', (ctx) => {
  ctx.response.status = 200
  ctx.body = getCartItems()
})

router.post('/wishlist', (ctx) => {
  const item = ctx.request.body
  ctx.response.status = 200
  ctx.body = addToWishList(item)
})

router.get('/wishlist', (ctx) => {
  ctx.response.status = 200
  ctx.body = getWishListItems()
})

router.delete('/wishlist/:id', (ctx) => {
  ctx.response.status = 200
  ctx.body = removeWishListItem(ctx.params.id)
})

router.delete('/cart', (ctx) => {
  ctx.response.status = 200
  ctx.body = removeCartItems()
})

module.exports = router
