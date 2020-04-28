const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const temperature = require("./data/temperature.json");
const precipitation = require("./data/precipitation.json");

const publicPath = path.join(__dirname, "build");
const port = process.env.PORT || 5000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/temp", function (req, res, next) {
  res.send(JSON.stringify(temperature));
});

app.get("/prec", function (req, res, next) {
  res.send(JSON.stringify(precipitation));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
