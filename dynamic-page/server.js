const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = new Koa()
  const route = new Router()

  route.get('/p/:id', (ctx) => {
    const actualPage = '/post'
    const queryParams = { title: ctx.params.id } 
    ctx.respond = false
    app.render(ctx.req, ctx.res, actualPage, queryParams)
  })

  route.get('*', (ctx) => {
    return handle(ctx.req, ctx.res)
  })

  server.use(route.routes())

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})