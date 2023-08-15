var express = require("express");
const LegoModel = require("../models/LegoModel");
var router = express.Router();

router.get("/", async (req, res) => {
    var lego = await LegoModel.find()
    res.render("toy/lego/index", { lego: lego });
  });

module.exports = router;