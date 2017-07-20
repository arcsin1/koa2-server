const router = require('koa-router')()

module.exports = router.get('/', async ( ctx )=>{
  ctx.body = {
    success: true,
    data: {
      text: 'hello world!'
    }
  }
}).get('/info', async ( ctx )=>{
  ctx.body = {
    success: true,
    data: {
      text: ' I,m arcsin1! '
    }
  }
})
