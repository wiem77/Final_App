import "./Offers.css"
import { GET_OFFERS } from "../../js/actions/AuthActions"
import React from "react"
import OfferList from "./OfferList"

const Offers = () => {
  return (
    <div className="cont">
      <div className="bg-img" />
      <div className="welcome">
        <h1>Those are the Available Offers</h1>

        <div>
          Choose What Offer you want and just Call the Person how posted
        </div>
        <div>
          <OfferList />
        </div>
      </div>
    </div>
  )
}

export default Offers
