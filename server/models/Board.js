const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  columns: [ColumnSchema],
});
const Board = mongoose.model("Board", BoardSchema);
exports.Board = Board;
