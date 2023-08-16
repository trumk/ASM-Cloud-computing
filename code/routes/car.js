var express = require("express");
const CarModel = require("../models/CarModel");
var router = express.Router();

router.get("/", async (req, res) => {
  var car = await CarModel.find();
  res.render("toy/car/index", { car: car });
});

router.get("/add", (req, res) => {
  res.render("toy/car/add");
});

router.post("/add", async (req, res) => {
  var lego = req.body;

  await CarModel.create(lego);
  res.redirect("/toy/car");
});

router.get("/delete/:id", async (req, res) => {
  var id = req.params.id;
  await CarModel.findByIdAndDelete(id)
    .then(() => console.log("Delete successfully"))
    .catch((error) => console.log("Delete failed"));
  res.redirect("/toy/car");
});

router.get("/deleteall", async (req, res) => {
  await CarModel.deleteMany()
    .then(() => console.log("Delete successfully"))
    .catch((error) => console.log("Delete failed"));
  res.redirect("/toy/car");
});

module.exports = router;
