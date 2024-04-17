const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  color: { type: String },
});
const Tag = mongoose.model("Tag", TagSchema);
exports.Tag = Tag;
