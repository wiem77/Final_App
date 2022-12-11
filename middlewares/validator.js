const { body, validationResult } = require("express-validator")
const registerRules = () => [
  body("cin", "cin must  be 8 charter").isLength({
    min: 8,
    max: 8,
  }),
  body("firstName", " First Name is REQUIRED  ").notEmpty(),
  body("lastName", " lastname is REQUIRED  ").notEmpty(),
  // body("dateOfBirth", "date Of Birth is REQUIRED").isISO8601().toDate(),
  body("age", " age is REQUIRED").notEmpty(),
  body("tel", " tel is REQUIRED  ").isLength({
    min: 8,
  }),
  body("email", " email is REQUIRED  ").notEmpty().isEmail(),
  body("password", "password must conatin 8 charter").isLength({
    min: 8,
    max: 20,
  }),
]
//LOGING_VALIDATOR
const loginRules = () => [
  body("email", " YouShould write you mail").notEmpty(),
  body("email", " Syntax Email invalid!!").isEmail,
  body("password", "password must conatin 8 charter").isLength({
    min: 8,
    max: 20,
  }),
]
//MIDDLEWARE_VALIDATOR
const validator = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() })
  }
  next()
}
module.exports = { validator, registerRules, loginRules }