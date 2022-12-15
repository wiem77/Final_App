const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
//require_bcrypte
const bcrypt = require("bcrypt")
//Require_Person_SCHEMA
const Person = require("../models/Person")
//import isauth middleware
const isAuth = require("../middlewares/auth")
//require web-token_JST
const jst = require("jsonwebtoken")
//require_VALIDATOR
const {
  validator,
  registerRules,
  loginRules,
} = require("../middlewares/validator")

//@route http://localhost:8000/users/register
//@desc Register_new_Person
//@access public
router.post("/register", registerRules(), validator, async (req, res) => {
  const { cin, firstName, lastName, dateOfBirth, age, tel, email, password } =
    req.body
  try {
    //chechk exixtence users
    let person = await Person.findOne({ cin })
    if (person) {
      return res.status(400).json({ msg: "Users already exixtes" })
    }
    //Create new user
    else {
      person = new Person({
        cin,
        firstName,
        lastName,
        dateOfBirth,
        age,
        tel,
        email,
        password,
      })
      console.log(person)
      //create salt hash
      const salt = 10
      const hasdPassWord = await bcrypt.hash(password, salt)
      person.password = hasdPassWord
      //save user
      await person.save()
      //signuser
      const payload = {
        id: person._id,
      }
      const token = await jst.sign(payload, process.env.SERCRETSTRING)
      res.status(200).json({ msg: "registed with success", person, token })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "server erreur" })
  }
})
//@route http://localhost:8000/users/login
//@desc Login_Person
//@access public
router.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    let person = await Person.findOne({ email })
    if (!person) {
      return res.status(400).send({ msg: "User not existe emails" })
    }

    //chechk pwd
    const isMatch = await bcrypt.compare(password, person.password)
    if (!isMatch) {
      return res.status(400).send({ msg: "bad Credentials pwd" })
    }
    const payload = {
      id: person._id,
    }
    const token = await jst.sign(payload, process.env.SERCRETSTRING)
    res.send({ msg: "logged with success", person, token })
  } catch (error) {
    res.status(500).json({ msg: "server erreur" })
  }
})
//@route api/auth/person
//@desc Register new user
//@access Private
router.get("/person", isAuth, (req, res) => {
  res.status(200).send({ person: req.person })
})
module.exports = router
