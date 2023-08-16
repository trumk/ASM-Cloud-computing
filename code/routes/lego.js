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

router.get("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var lego = await LegoModel.findById(id);
  res.render("toy/lego/edit", { lego: lego });
});

router.post("/edit/:id", async (req, res) => {
  var id = req.params.id;
  var updatedLego = req.body;

  var originalLego = await LegoModel.findById(id);

  Object.keys(updatedLego).forEach((key) => {
    if (updatedLego[key] !== "" && updatedLego[key] !== undefined) {
      originalLego[key] = updatedLego[key];
    }
  });
  await originalLego.save();
  res.redirect("/toy/lego");
});

router.get("/add", (req, res) => {
  res.render("toy/lego/add");
});

router.post("/add", async (req, res) => {
  var lego = req.body;

  await LegoModel.create(lego);
  res.redirect("/toy/lego");
});

module.exports = router;
