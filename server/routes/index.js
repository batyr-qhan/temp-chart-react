const express = require("express");
const router = express.Router();

const temperature = require("../data/temperature.json");
const precipitation = require("../data/precipitation.json");

/* GET home page. */
router.get("/temp", function (req, res, next) {
  res.send(JSON.stringify(temperature));
});

router.get("/prec", function (req, res, next) {
  res.send(JSON.stringify(precipitation));
});

module.exports = router;
