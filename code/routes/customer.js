var express = require('express');
const CarModel = require('../models/CarModel');
const LegoModel = require('../models/LegoModel');
var router = express.Router();


router.get("/", async (req, res) => {
  var car = await CarModel.find();
  var lego = await LegoModel.find();
  res.render("customer", { car: car, lego:lego });
});

router.get("/detail/:id", async (req, res) => {
    var id = req.params.id;
    var car = await CarModel.findById(id);
    var lego = await CarModel.findById(id);
    res.render("toy/car/detail", { car: car, lego:lego });
  });

module.exports = router;
