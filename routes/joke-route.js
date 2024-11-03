var express = require("express");
var router = express.Router();

const JokeController = require("../controllers/joke-controller");

router.post("/", async function (req, res, next) {
  JokeController.saveJoke(req, res, next);
});
router.get("/", async function (req, res, next) {
  JokeController.getJokes(req, res, next);
});
router.get("/:id", async function (req, res, next) {
  JokeController.getJokeById(req, res, next);
});
router.put("/:id", async function (req, res, next) {
  JokeController.updateJoke(req, res, next);
});
router.delete("/:id", async function (req, res, next) {
  JokeController.deleteJoke(req, res, next);
});


module.exports = router;
