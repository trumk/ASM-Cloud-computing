const mongoose = require('mongoose')

var LegoSchema = mongoose.Schema({
    brandName: String,
    modelName: String,
    description: String,
    price: Number,
    image: String,
    quantity : Number
})

const LegoModel = mongoose.model("lego", LegoSchema, "lego")

module.exports = LegoModel