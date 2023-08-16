var express = require("express");
const CarModel = require("../models/CarModel");
var router = express.Router();

router.get("/", async (req, res) => {
    var car = await CarModel.find();
    res.render("toy/car/index", { car: car });
  });

module.exports = router;