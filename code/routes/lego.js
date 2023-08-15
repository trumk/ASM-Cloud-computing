var express = require("express");
const LegoModel = require("../models/LegoModel");
var router = express.Router();

router.get("/", async (req, res) => {
  var lego = await LegoModel.find();
  res.render("toy/lego/index", { lego: lego });
});

router.get("/delete/:id", async (req, res) => {
  var id = req.params.id;
  await LegoModel.findByIdAndDelete(id)
    .then(() => console.log("Delete successfully"))
    .catch((error) => console.log("Delete failed"));
  res.redirect("/toy/lego");
});

router.get("/deleteall", async (req, res) => {
  await LegoModel.deleteMany()
    .then(() => console.log("Delete successfully"))
    .catch((error) => console.log("Delete failed"));
  res.redirect("/toy/lego");
});

router.get("/add", (req, res) => {
  res.render("student/studentAdd");
});



module.exports = router;
