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
    var lego = await LegoModel.findById(id);
  
    if (car) {
      res.render("toy/car/detail", { car: car });
    } else if (lego) {
      res.render("toy/lego/detail", { lego: lego });
    } else {
      // Handle the case when neither a car nor a lego with the provided ID is found
      res.status(404).send("Product not found");
    }
  });

module.exports = router;
