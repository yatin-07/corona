const Notes = require("../model/notes")

const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
  res.send('hello');
})


router.post("/notes", (req, res) => {
  const notes = new Notes({
    notes: req.body.notes,
    tags: req.body.tags
   
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


module.exports = router;