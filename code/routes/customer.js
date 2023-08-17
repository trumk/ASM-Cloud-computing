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
      res.status(404).send("Product not found");
    }
  });

  router.post("/order", async (req, res) => {
    var data = req.body
    var id = data.id
    var car = await CarModel.findById(id);
    var lego = await LegoModel.findById(id);
    var price = data.price
    var quantity = data.quantity
    var total = price * quantity
  
    if (car) {
      res.render("toy/car/order", { car: car, price:price, total:total});
    } else if (lego) {
      res.render("toy/lego/order", { lego: lego, price:price, total:total});
    } 
  });

module.exports = router;
