var express = require("express");
const ToyModel = require("../models/LegoModel");
var router = express.Router();

router.get("/", async (req, res) => {
    var toys = await ToyModel.find()
    res.render("toy/lego/index", { students: students });
  });

module.exports = router;