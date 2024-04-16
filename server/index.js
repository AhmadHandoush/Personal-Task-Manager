const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user.model");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mangodb://127.0.0.1:27017/task");

app.post("/register", (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("connect ");
});
