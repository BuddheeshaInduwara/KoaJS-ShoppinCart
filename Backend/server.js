const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new Koa()

const AuthRoutes = require('./routes/auth.routes')
const CustomerRoutes = require('./routes/customer.routes')
const TraderRoutes = require('./routes/trader.routes')

app.use(bodyParser())
app.use(cors())

app.use(AuthRoutes.routes()).use(AuthRoutes.allowedMethods())
app.use(TraderRoutes.routes()).use(TraderRoutes.allowedMethods())
app.use(CustomerRoutes.routes()).use(CustomerRoutes.allowedMethods())

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is listening on port ${port}`))
