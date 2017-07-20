const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const page = require('./page')
const user = require('./user')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())

module.exports = router
