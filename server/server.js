const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

const temperature = require("./data/temperature.json");
const precipitation = require("./data/precipitation.json");

const publicPath = path.join(__dirname, "build");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.get("/temp", (req, res) => {
  res.send(JSON.stringify(temperature));
});

app.get("/prec", (req, res) => {
  res.send(JSON.stringify(precipitation));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
  console.log("start page");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
