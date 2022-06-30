const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new Koa()

app.use(bodyParser())
app.use(cors())

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is listening on port ${port}`))
