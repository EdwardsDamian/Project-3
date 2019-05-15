const Order = require('../models/Order.js')

const orderContoller = {
    index: async (req, res) => {
        try {
            const orders = await Order.find({})
            res.json(orders)
        }   catch(err) {
            console.log(err)
        }
    },

    //= =====================
    // SHOW
    //= =====================

    show: async (req, res) => {
        try {
            const orderId = req.params.id
            const order = await Order.findById(orderId)
            res.json(order)
        }   catch(err) {
            console.log(err)
            res.json(err)
        }
    },

    //= =====================
    // CREATE
    //= =====================

    create: async (req, res) => {
        try {
            const newOrder = req.body
            const savedOrder = await Order.create(newOrder)
            res.json(savedOrder)
        }   catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}
    module.exports = orderContoller
