// const User = require('../models/User');
// const { fetchLeetCodeData } = require('../services/leetcodeService');
// const { calculateScore } = require('../utils/scorer');

// const registerUser = async (req, res) => {
//   const { email, leetcodeUsername } = req.body;
//   try {
//     const exists = await User.findOne({ leetcodeUsername });
//     if (exists) return res.status(409).json({ message: "User already exists" });

//     const stats = await fetchLeetCodeData(leetcodeUsername);
//     const score = calculateScore(stats);

//     const newUser = await User.create({ email, leetcodeUsername, score });
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



// module.exports = { registerUser }

const User = require('../models/User');
const { fetchLeetCodeData } = require('../services/leetcodeService');
const { calculateScore } = require('../utils/scorer');

const registerUser = async (req, res) => {
  const { email, leetcodeUsername } = req.body;
  try {
    const exists = await User.findOne({ leetcodeUsername });
    if (exists) return res.status(409).json({ message: "User already exists" });

    const stats = await fetchLeetCodeData(leetcodeUsername);
    const score = calculateScore(stats);

    const newUser = await User.create({ email, leetcodeUsername, score });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ score: -1 }).limit(50);
  res.json(users);
};

module.exports = { registerUser, getLeaderboard };
