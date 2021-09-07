import mongoose from "mongoose";
const Notes =  mongoose.Schema({
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

export default mongoose.model("notes", Notes);