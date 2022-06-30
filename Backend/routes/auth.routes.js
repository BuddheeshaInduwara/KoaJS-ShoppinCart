const Router = require('@koa/router');
const { register, login } = require('../api/auth.api');

const router = new Router({
    prefix: '/auth'
})

router.post('/register', (ctx)=>{
    let user = ctx.request.body
    ctx.response.status = 201
    ctx.body = register(user)
})

router.post('/login', (ctx) => {
    let user = ctx.request.body
    ctx.response.status = 201
    ctx.body = login(user)
}) 

module.exports = router