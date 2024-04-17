const Board = require("../models/Board");

exports.createBoard = async (req, res) => {
  try {
    const { name, owner } = req.body;
    const newBoard = new Board({
      name,
      owner,
      columns: [], // Start with an empty array of columns
    });
    await newBoard.save();
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ owner: req.user._id });
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
