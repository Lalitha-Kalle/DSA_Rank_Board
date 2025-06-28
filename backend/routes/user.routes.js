const express = require("express");
const { registerUser, getLeaderboard } = require("../controllers/user.controller");

const router = express.Router()

router.post("/register" ,registerUser)
router.get("/getLeaderboard", getLeaderboard)

module.exports = router;