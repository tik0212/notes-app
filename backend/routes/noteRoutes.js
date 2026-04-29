const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.post("/", async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content,
    });

    const savedNote = await newNote.save();

    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
