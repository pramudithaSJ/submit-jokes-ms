const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const jokeRoutes = require("./routes/joke-route");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/jokes", jokeRoutes);

app.listen(3001, () =>
  console.log("Submit Jokes service running on port 3001")
);
