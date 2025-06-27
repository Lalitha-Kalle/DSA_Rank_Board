const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Welcome to Home page")
})

app.listen(process.env.PORT, () => {
  console.log(`Server running at port: ${process.env.PORT}`)
})