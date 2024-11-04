const JokeService = require("../services/joke-service");

async function generateJoke(req, res, next) {
  const result = await JokeService.generateJoke(req.params.type);
  if (result) {
    res.status(200).send(result);
  }
}
async function saveJoke(req, res, next) {
  console.log(req.body);
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

async function getJokes(req, res, next) {
  try {
    const result = await JokeService.getJokes();
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getJokeById(req, res, next) {
  try {
    const result = await JokeService.getJokeById(req.params.id);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function updateJoke(req, res, next) {
  console.log("controller body",req.body);
  try {
    const result = await JokeService.updateJoke(req.params.id, req.body);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteJoke(req, res, next) {
  try {
    const result = await JokeService.deleteJoke(req.params.id);
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
  getJokes,
  getJokeById,
  updateJoke,
  deleteJoke,
};
