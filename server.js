//REQUIRE_EXPRESS
const express = require("express")
const app = express()
//REQUIRE_DOTENV
require("dotenv").config({ path: "../config/.env" })
//CONNECT_DB
const connectDB = require("./config/connectDB")
connectDB()
//MIDDLEWARE
app.use(express.json())
//ROUTES
app.use("/users/", require("./routes/personroute"))
app.use("/offers/", require("./routes/offerroutes"))
app.use((err, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: err.message,
  })
  console.log("something wrong happened, shutting down...")
  // process.exit(1)
})
//CREATE-PORT
const port = 5000
//LUNCH
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`the server is runnig on ${port}`)
)
