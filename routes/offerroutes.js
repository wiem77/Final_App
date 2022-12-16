const express = require("express")
const router = express.Router()
//Offer_SCHEMA
const Offer = require("../models/Offer")

//JSToken
const jst = require("jsonwebtoken")
//Validator
const { validator, addOfferRules } = require("../middlewares/validator")

//@route http://localhost:8000/offers/addNewOffer
//@desc Register_new_Offer
//@access private
router.post("/addNewOffer", addOfferRules(), validator, async (req, res) => {
  const { jobName, jobDescription, jobRate, dateToDoJOb, place } = req.body
  try {
    //Create_New_OFFER
    let offer = new Offer({
      jobName,
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
router.get("/offer", async (req, res) => {
  try {
    const offers = await Offer.find()
    res.json({ msg: "data fetched", offers })
  } catch (error) {
    console.log(error)
  }
})

//@route http://localhost:8000/offers/consultOffer
//@desc_Consult_Offer
//@access private
router.get("/offer/:_id", async (req, res) => {
  const { id } = req.params
  try {
    const offer = await Offer.findOne({ _id: id })
    res.json({ msg: "offer ", offer })
  } catch (error) {
    console.log(error)
  }
})

//delete Offer
router.delete("/delete/:_id", async (req, res) => {
  const { id } = req.params
  try {
    const contact = await Offer.findOneAndDelete({ _id: id })
    res.json({ msg: "Offer deleted", offer })
  } catch (error) {
    console.log(error)
  }
})
//http://localhost:8000/offers/editContact:_id
//edit_Offer
router.put("/edit/:_id", async (req, res) => {
  const { _id } = req.params
  const { jobDescription, jobRate, datOfPublish, jobName, place } = req.body
  try {
    const offer = await Offer.findOneAndUpdate(
      { _id },
      { jobDescription, jobRate, datOfPublish, jobName, place }
    )
    res.json({ msg: "offer edited", offer })
  } catch (error) {
    console.log(error)
  }
})
//@route /offer
//@desc Register new user
//@access Private
// router.get("/offer", isAuth, (req, res) => {
//   res.status(200).send({ offer: req.offer })
// })
module.exports = router
