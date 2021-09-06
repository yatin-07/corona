const mongoose = require("mongoose");
const Notes = new mongoose.Schema({
  notes: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  Time: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("notes", Notes);
