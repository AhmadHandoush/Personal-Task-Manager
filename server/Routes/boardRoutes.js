const express = require("express");
const { createBoard, getBoards } = require("../controllers/boardController");
const router = express.Router();

router.post("/", createBoard);
router.get("/", getBoards);

module.exports = router;
