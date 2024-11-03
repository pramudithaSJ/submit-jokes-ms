const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  isModerated: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Joke = mongoose.model("Joke", jokeSchema);
module.exports = Joke;
