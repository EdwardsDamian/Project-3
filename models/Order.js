const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Order = new Order ({
    product: String,
    quantity: Number,
    comments: String,
    status: String,
    shipDate: Date
})

module.exports = mongoose.model('Order', Order)
