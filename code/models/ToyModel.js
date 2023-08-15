const mongoose = require('mongoose')

var ToySchema = mongoose.Schema({
    brandName: String,
    modelName: String,
    description: String,
    price: Number,
    image: String,
    quantity : Number
})

const ToyModel = mongoose.model("lego", ToySchema, "lego")

module.exports = ToyModel