const express = require('express')
const router =  express.Router()

const { createInfo } = require('../controller/info')
router.route('/').post( createInfo)


module.exports = router