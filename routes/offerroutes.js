const express = require("express")
const router = express.Router()
//Offer_SCHEMA
const Offer = require("../models/Offer")
//BODY_Parser
const bodyParser = require("body-parser")
//JSToken
const jst = require("jsonwebtoken")
//localhost:8000/offers/
//TESTED_ROUTE
router.get("/test", (req, res) => {
  res.send("tested")
})
module.exports = router
