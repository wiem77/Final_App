const mongoose = require("mongoose")
// const Adress = require("./Address")
const schema = mongoose.Schema
const personSechema = new schema({
  cin: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date },
  age: { type: Number, required: true, min: 18 },
  tel: { type: Number, required: true },
  email: { type: String, unique: true },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
})
module.exports = Person = mongoose.model("Person", personSechema)
