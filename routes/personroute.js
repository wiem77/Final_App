const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
//require_bcrypte
const bcrypt = require("bcrypt")
//Require_Person_SCHEMA
const Person = require("../models/Person")
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
      return res
        .status(400)
        .json({ msg: "u already have acount in our website" })
    } else {
      //Create new Person
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
      //create salt hash
      const salt = 10
      const hasdPassWord = await bcrypt.hash(password, salt)
      person.password = hasdPassWord
      //save user
      await person.save()
    }

    res.status(200).json({ msg: "Welcome  you are a user", person })
  } catch (error) {
    res.status(500).json({ msg: "server erreur" })
  }
})
//@route http://localhost:8000/users/login
//@desc Login_Person
//@access public
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body
  try {
    let person = await Person.findOne({ email })
    if (!person) {
      return next(new Error("Please provide email and password!", 400))
    }
    // chechk pwd
    const isMatch = await bcrypt.compare(password, person.password)

    if (isMatch) {
      next(new Error("PASSWoRD", 400))
      console.log(isMatch)
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
module.exports = router
