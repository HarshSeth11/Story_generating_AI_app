const express = require("express");
const router = express.Router();
const story = require("../models/Stories");


router.post(
  "/createstory",
  async (req, res) => {
    try {
      const NewStory = new story({
        Prompt: req.body.Prompt,
        Story: req.body.Story,
      });
      global.prompt_value = req.body.Prompt;
      await NewStory.save();
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;