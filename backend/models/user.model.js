const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  email,
  leetcodeUsername,
  score,
})

module.exports = mongoose.model("User", userSchema)