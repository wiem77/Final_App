const mongoose = require("mongoose")
const schema = mongoose.Schema
const offerSechema = new schema({
  jobRef: { type: String, required: true, unique: true },
  jobDescription: { type: String, required: true, minlength: 10 },
  jobRate: { type: Number, required: true },
  datOfPublish: { type: Date, default: Date.now },
  dateToDoJOb: { type: Date, required: true },
})
module.exports = Offer = mongoose.model("Offer", offerSechema)
