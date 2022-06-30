const Router = require('koa-router')
const { addItem } = require('../api/trader.api')

const router = new Router({
  prefix: '/trader',
})

router.post('/inventory', (ctx) => {
  let item = ctx.request.body
  ctx.response.status = 201
  ctx.body = addItem(item)
})

router.put('/inventory', (ctx) => {
  let item = ctx.request.body
  ctx.response.status = 200
  ctx.body = editItem(item)
})

router.get('/inventory', (ctx) => {
  ctx.response.status = 200
  ctx.body = getInventoryItems()
})

router.get('/customers', (ctx) => {
  ctx.response.status = 200
  ctx.body = getAllCustomers()
})

router.put('/promotion', (ctx) => {
  const { id, item } = ctx.request.body
  ctx.response.status = 201
  ctx.body = addPromotions(id, item)
})

module.exports = router
