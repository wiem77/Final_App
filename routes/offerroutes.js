const express = require("express")
const router = express.Router()
//Offer_SCHEMA
const Offer = require("../models/Offer")
//BODY_Parser
const bodyParser = require("body-parser")
//JSToken
const jst = require("jsonwebtoken")
//Validator
const { validator, addOfferRules } = require("../middlewares/validator")

//localhost:8000/offers/
//TESTED_ROUTE
router.get("/test", (req, res) => {
  res.send("tested")
})
//@route http://localhost:8000/offers/addNewOffer
//@desc Register_new_Offer
//@access private
router.post("/addNewOffer", addOfferRules(), validator, async (req, res) => {
  const { jobDescription, jobRate, dateToDoJOb } = req.body
  try {
    //Create_New_OFFER
    let offer = new Offer({
      jobDescription,
      jobRate,
      dateToDoJOb,
    })

    //generate_REF
    const nb = Math.floor(1000 + Math.random() * 9000)
    const refUnique = `${nb}`
    offer.jobRef = refUnique
    //save_offer
    await offer.save()

    res.status(200).json({ msg: "your offer is created succesfuly", offer })
  } catch (error) {
    res.status(500).json({ msg: "server erreur" })
  }
})
//@route http://localhost:8000/offers/consultOffer/all
//@desc_Consult_Offer
//@access private
router.get("/", (req, res) => {
  Offer.find()
    .then((offer) => res.send(offer))
    .catch((err) => console.log(err))
})
//@route http://localhost:8000/offers/consultOffer
//@desc_Consult_Offer
//@access private
router.get("/:_id", (req, res) => {
  const { _id } = req.params
  Offer.findOne({ _id })
    .then((offer) => res.send(offer))
    .catch((err) => console.log(err))
})

//delete Offer
router.delete("/:_id", (req, res) => {
  const { _id } = req.params
  Offer.findOneAndDelete({ _id })
    .then((offer) => res.status(200).json({ msg: "Offer deleted", offer }))
    .catch((err) => console.log(err))
})
//http://localhost:8000/offers/editContact:_id
//edit_Contact
router.put("/:_id", (req, res) => {
  const { _id } = req.params
  const { jobDescription, jobRate, datOfPublish } = req.body
  Offer.findOneAndUpdate(
    { _id },
    { $set: { jobDescription, jobRate, datOfPublish } }
  )
    .then((offer) => res.status(200).json({ msg: "Offer Updated", offer }))
    .catch((err) => console.log(err))
})
module.exports = router
