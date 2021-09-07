import express from "express";
import Notes from "../model/notes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/notes", (req, res) => {
  const notes = new Notes({
    notes: req.body.notes,
    tags: req.body.tags,
  });
  notes
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
export default router;
