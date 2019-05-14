const express = require('express')
const router = express.Router()

const scrubController = require('../controllers/scrubController.js')

router.get('/', scrubController.index)


module.exports = router