const express = require('express')
const router = express.Router()

const scrubController = require('../controllers/scrubController.js')

router.get('/', scrubController.index)
router.post('/', scrubController.create)
router.get('/:id', scrubController.show)


module.exports = router