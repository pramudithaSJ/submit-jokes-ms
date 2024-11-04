const JokeModel = require("../models/joke-model");
const axios = require("axios");
const { text } = require("express");
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//generateaJoke

const generateJoke = async (prompt) => {
  const openai = new OpenAI();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-2024-08-06",
    messages: [
      {
        role: "system",
        content: `You are a funny person, give me a joke that relatieve with ${prompt} and in the punchline and not more than 20 words`,
      },
    ],
    response_format: {
      // See /docs/guides/structured-outputs
      type: "json_schema",
      json_schema: {
        name: "joke_schema",
        schema: {
          type: "object",
          properties: {
            joke: {
              description: "The joke",
              type: "string",
            },
          },
          additionalProperties: false,
        },
      },
    },
  });

  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
};

const saveJoke = async (body) => {
  try {
    const joke = new JokeModel({
      text: body.text,
      type: body.type,
    });
    const result = await joke.save();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getJokes = async () => {
  try {
    const jokes = await JokeModel.find();
    return jokes;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getJokeById = async (id) => {
  try {
    const joke = await JokeModel.findById(id);
    return joke;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateJoke = async (id, body) => {
  try {
    console.log("service body", body);
    const joke = await JokeModel.findById(id);
    joke.text = body.text;
    joke.type = body.type;
    joke.status = "approved";

    const result = await joke.save();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const deleteJoke = async (id) => {
  try {
    const joke = await JokeModel.findById(id);
    const result = await joke.deleteOne();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  generateJoke,
  saveJoke,
  getJokes,
  getJokeById,
  updateJoke,
  deleteJoke,
};
