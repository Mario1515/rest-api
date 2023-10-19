const express = require("express");
const cors  = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const { auth } = require("./middlewares/authMiddleware");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/catalog")
    .then(() => console.log("DB Connect"))
    .catch (err => console.log("Something went wrong " + err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // parsing json data from client
app.use(cors());
app.use(auth);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use(routes);

app.listen(3030, () => {
  console.log("RESTful server listening on port 3030...");
});
