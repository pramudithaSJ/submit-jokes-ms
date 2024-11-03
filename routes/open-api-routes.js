var express = require("express");
var router = express.Router();

const JokeController = require("../controllers/joke-controller");

router.get("/:type", async function (req, res, next) {
  JokeController.generateJoke(req, res, next);
});

module.exports = router;
