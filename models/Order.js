const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Order = new Schema ({
    product: String,
    quantity: Number,
    size: String,
    totalPrice: Number,
    status: String,
    shipDate: Date,
    comments: String
})

module.exports = mongoose.model('Order', Order)
