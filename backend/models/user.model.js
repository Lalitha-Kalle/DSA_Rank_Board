const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  leetcodeUsername: {
    type: String,
    required: true,
    unique: true
  },
  score: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model("User", userSchema)