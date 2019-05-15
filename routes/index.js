const express = require('express')
const router = express.Router()

const scrubController = require('../controllers/scrubController.js')
const orderController = require('../controllers/orderController.js')


router.get('/scrubs', scrubController.index)
router.post('/scrubs', scrubController.create)
router.get('/scrubs/:id', scrubController.show)
router.put('/scrubs/:id', scrubController.update)
router.delete('/scrubs/:id', scrubController.delete)

router.get('/orders', orderController.index)
router.get('/orders/:orderId', orderController.show)
router.post('/orders', orderController.create)
router.put('/orders/:orderId', orderController.update)
router.delete('/orders/:orderId', orderController.delete)

module.exports = router