const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Scrub = new Schema ({
    name: String,
    description: String,
    image: String,
    size: String,
    price: Number
})

module.exports = mongoose.model('Scrub', Scrub)