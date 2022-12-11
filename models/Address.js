const mongoose = require("mongoose")
const schema = mongoose.Schema
const adressSechema = new schema({
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  codepostal: { type: Number },
})
module.exports = Address = mongoose.model("Adress", adressSechema)
