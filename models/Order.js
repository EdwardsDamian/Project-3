const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const Order = new Schema ({
    scrub: {type:ObjectId, ref:"Scrub"},
    entireOrder: [],
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    product: String,
    quantity: Number,
    size: String,
    totalPrice: Number,
    status: String,
    shipDate: String,
    comments: String
})

module.exports = mongoose.model('Order', Order)
