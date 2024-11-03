const JokeService = require("../services/joke-service");

async function generateJoke(req, res, next) {
  const result = await JokeService.generateJoke(req.params.type);
  if (result) {
    res.status(200).send(result);
  }
}
async function saveJoke(req, res, next) {
  try {
    const result = await JokeService.saveJoke(req.body);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  generateJoke,
  saveJoke,
};
