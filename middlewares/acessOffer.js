const jst = require("jsonwebtoken")
const Offer = require("../models/Offer")
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}
