const JokeService = require("../services/joke-service");

async function generateJoke(req, res, next) {
  const result = await JokeService.generateJoke(req.params.type);
  if (result) {
    res.status(200).send(result);
  }
  
}

module.exports = {
  generateJoke,
};
