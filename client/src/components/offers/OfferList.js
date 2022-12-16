import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOffers } from "../../js/actions/AuthActions"
import OffersCard from "./OffersCard"

const OfferList = () => {
  const dispatch = useDispatch()
  const getOffer = () => dispatch(getOffers())

  // const offer = useSelector((state) => state.offers.offers)
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {/* {offer && offer.map((offer) => <OffersCard offer={offer} />)} */}
      <OffersCard offer={getOffer} />
    </div>
  )
}

export default OfferList
