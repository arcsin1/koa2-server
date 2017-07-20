const router = require('koa-router')()

module.exports = router.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/helloworld</a></li>
      <li><a href="/page/404">404</a></li>
      <li><a href="/api/get/data">data</a></li>
      <li><a href="/api/get/user2">user2</a></li>
      <li><a href="/user">/user</a></li>
      <li><a href="/user/info">/user/info</a></li>
    </ul>
  `
  ctx.body = html
})
