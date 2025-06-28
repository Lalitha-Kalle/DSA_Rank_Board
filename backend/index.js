const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require("cors")

require("./db/db")
const userRoutes = require("./routes/user.routes")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/users", userRoutes)


app.get("/", (req, res) => {
  res.send("Welcome to Home page")
})

app.listen(process.env.PORT, () => {
  console.log(`Server running at port: ${process.env.PORT}`)
})