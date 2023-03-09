const express = require('express')
const router = express.Router()

router.use(require('./web'))

router.use(require('./Controllers/UserController'))

module.exports = router