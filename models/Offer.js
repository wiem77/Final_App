const mongoose = require("mongoose")
const schema = mongoose.Schema
const offerSechema = new schema({
  jobRef: { type: Number, unique: true },
  jobName: { type: String, required: true, maxlength: 10 },
  place: { type: String, required: true, minlength: 5 },
  jobDescription: { type: String, required: true, minlength: 10 },
  jobRate: { type: Number, required: true, min: 8 },
  datOfPublish: { type: Date, default: Date.now },
  dateToDoJOb: { type: String, required: true },
})
module.exports = Offer = mongoose.model("Offer", offerSechema)
