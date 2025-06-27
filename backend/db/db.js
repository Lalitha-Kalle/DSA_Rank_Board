const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL) 
.then(() => {
  console.log("DB connected")
})
.catch((err) => {
  console.error("Error at db connection:", err)
})