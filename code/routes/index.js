var express = require('express');
const CarModel = require('../models/CarModel');
const LegoModel = require('../models/LegoModel');
var router = express.Router();

router.get("/", async (req, res) => {
  var car = await CarModel.find();
  var lego = await LegoModel.find();
  res.render('index', { car: car, lego:lego });
});

module.exports = router;
