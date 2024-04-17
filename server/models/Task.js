const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  attachments: [String],
});
const ColumnSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tasks: [TaskSchema],
});
