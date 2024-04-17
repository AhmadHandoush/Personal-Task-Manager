const express = require("express");
const {
  createBoard,
  getBoards,
  updateBoard,
  deleteBoard,
  getBoardDetails,
} = require("../controllers/boardController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(protect, createBoard).get(protect, getBoards);

router
  .route("/:boardId")
  .get(protect, getBoardDetails)
  .put(protect, updateBoard)
  .delete(protect, deleteBoard);

module.exports = router;
