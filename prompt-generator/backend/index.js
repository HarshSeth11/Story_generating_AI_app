const express = require("express");
const ConnectionDB = require("./db");
const storySchema = require("./models/Stories");

// configure dotenv
require("dotenv").config();

// import modules from OpenAI library
const { OpenAI } = require("openai");

const app = express();
ConnectionDB();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api", require("./Routes/CreateStories"));
app.use("/api", require("./Routes/DisplayData"));

// console.log(process.env.OPENAI_API_KEY);
const dotenv = require('dotenv');
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
  });

// open ai api to generate a story
app.post("/ask", async (req, res) => {
  // getting prompt question from request
  const prompt = req.body.prompt;

  try {
    if (prompt == null) {
      throw new Error("Uh oh, no prompt was provided");
    }
    // trigger OpenAI completion
    let completion = await openai.completions.create({
      model: "text-davinci-003",
      prompt,
      max_tokens: 600,
    });
    // retrieve the completion text from response
    completion = completion.choices[0].text;
    console.log(completion);
    // return the result
    return res.status(200).json({
      success: true,
      message: completion,
    });
  } catch (error) {
    console.log(error.message + "000");
  }
});

app.listen(5000);
