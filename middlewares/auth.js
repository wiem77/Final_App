const jst = require("jsonwebtoken")
const Person = require("../models/Person")

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["xx-auth-token"]
    //chechk_token
    if (!token) {
      return res.status(401).send({ msg: "authentification Denneid" })
    }
    const decodeed = await jst.verify(token, process.env.SERCRETSTRING)
    //add Person from payload
    const person = await Person.findById(decodeed.id, {
      lastName: 1,
      firstName: 1,
      tel: 1,
    })
    //chechk for user
    if (!person) {
      return res.status(401).send({ msg: " authentification dennied" })
    }
    //create_Person
    req.person = person
    next()
  } catch (err) {
    console.log(err)
    return res.satatus(400).send({ msg: "token is not valid" })
  }
}
module.exports = isAuth
