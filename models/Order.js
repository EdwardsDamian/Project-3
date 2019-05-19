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
    product: String,  //seed
    quantity: Number, //seed
    size: String,    //seed
    totalPrice: Number, //seed
    status: String,  //seed
    shipDate: String, //seed
    comments: String  //seed
})

module.exports = mongoose.model('Order', Order)
