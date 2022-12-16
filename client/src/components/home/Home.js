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
          One Search, Millions of Jobs. Here you can find the right fit. Our
          website offers you access to a job board that has been thoroughly
          screened to ensure each posting is the real deal, and an incredible
          selection of flexible, part-time, and remote work opportunities. If
          you’re tired of wading through muddy waters, unsure which jobs are the
          real deal, PetitB should be your next stop..
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
