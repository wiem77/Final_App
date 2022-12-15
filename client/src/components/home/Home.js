import "./Home.css"

import React from "react"
import SignUp from "../SignUp/SignUp"
import Signin from "../Signin/Signin"
const Home = () => {
  return (
    <div className="container">
      <div className="bg-img" />
      <div className="welcome">
        <h1>Welcome!</h1>
        <p>
          Ut otiosae omnes redierit redierit tribus Pompiliani cum quotquot cum
          Romani ut licet licet suscipitur Pompiliani tribus ut et nulla domina
          suffragiorum quotquot partes ubique Pompiliani omnes auctoritate et
          terrarum Romani partes tamen ut set populique sint olim sint ubique et
          et omnes sunt Romani cum certamina securitas patrum suscipitur.
        </p>
        <div className="para">
          Please sign in, or if you dont have an account you can create an
          account to check the offers!
        </div>
        <div className="btns">
          <SignUp />
          <Signin />
        </div>
      </div>
    </div>
  )
}

export default Home
