const mongoose = require('mongoose')

var CarSchema = mongoose.Schema({
    brandName: String,
    modelName: String,
    description: String,
    price: Number,
    image: String,
    quantity : Number
})

const CarModel = mongoose.model("car", CarSchema, "car")

module.exports = CarModel