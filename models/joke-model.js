const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const Joke = mongoose.model("Joke", jokeSchema);
module.exports = Joke;
