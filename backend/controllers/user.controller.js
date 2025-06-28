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

const User = require('../models/user.model');
const { fetchLeetcodeData } = require('../services/leetcodeService');
const { calculateScore } = require('../utils/score');

const registerUser = async (req, res) => {
  const { email, leetcodeUsername } = req.body;
  if (!email || !leetcodeUsername) {
    return res.status(400).json({ message: "Email and Leetcode username are required" });
  }

  try {
    const exists = await User.findOne({ leetcodeUsername });
    if (exists) return res.status(409).json({ message: "User already exists" });

    const stats = await fetchLeetcodeData(leetcodeUsername);
    const score = calculateScore(stats);

    const newUser = await User.create({ email, leetcodeUsername, score });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { registerUser };
