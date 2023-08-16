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
  var car = req.body;

  await CarModel.create(car);
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

router.get("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var car = await CarModel.findById(id);
  res.render("toy/car/edit", { car: car });
});

router.post("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var updatedCar = req.body;

  var originalCar = await CarModel.findById(id);

  Object.keys(updatedCar).forEach((key) => {
    if (updatedCar[key] !== "" && updatedCar[key] !== undefined) {
        originalCar[key] = updatedCar[key];
    }
  });
  await originalCar.save();
  res.redirect("/toy/car");
});

module.exports = router;
