const path = require("path");
const uniqid = require("uniqid");
const notes = require("../db/db");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });
  app.post("/api/notes", (req, res) => {
    let ID = uniqid();
    const makeNote = {
      id: ID,
      title: req.body.title,
      text: req.body.text
    };
    notes.push(makeNote);
    res.json(notes);
  });
  app.delete("/api/notes/:id", (req, res) => {
    const deleteID = req.params.id;
    const deletedIDIndex = notes.findIndex((notes) => notes.id === deleteID);
    notes.splice(deletedIDIndex, 1);
    res.json(notes);
  });
};