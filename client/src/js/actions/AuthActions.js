import axios from "axios"
import {
  AUTH_ERRORS,
  GET_AUTH_PERSON,
  LOGOUT_PERSON,
  PERSON_LOADING,
  LOGIN_PERSON,
  REGISTER_PERSON,
  UPDATE_OFFERS,
  ADD_OFFER,
  GET_OFFERS,
  DELETE_OFFERS,
  GET_OFFERS_OFFER_BYID,
} from "../constants/ActionsTypes"
//REGISTER
export const registerPerson = (personData) => async (dispatch) => {
  try {
    const res = await axios.post("/users/register", personData)
    dispatch({
      type: REGISTER_PERSON,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
//LoginUSER
export const loginPerson = (personData) => async (dispatch) => {
  try {
    const res = await axios.post("/users/login", personData)
    dispatch({
      type: LOGIN_PERSON,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
//GetOffer
export const getOffers = (offerData) => async (dispatch) => {
  try {
    const res = await axios.get("/offers/offer", offerData)
    dispatch({
      type: GET_OFFERS,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

//UpdateOffer
export const updateOffer = (id, updatedOffer) => async (dispatch) => {
  try {
    const res = await axios.put(`/offers/edit/${id}`, updatedOffer)
    dispatch(getOffers())
  } catch (error) {
    console.log(error)
  }
}

//addOffer
export const addOffer = (offerData) => async (dispatch) => {
  try {
    const res = await axios.post("/offers/addNewOffer", offerData)
    dispatch(getOffers())
  } catch (error) {
    console.log(error)
  }
}
//deleteOffer
export const delteOffer = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/offers/delete/${id}`)
    dispatch(getOffers())
  } catch (error) {
    console.log(error)
  }
}
//GETOFFERBYID
export const getOfferByid = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/offers/offer/${id}`)
    dispatch({
      type: GET_OFFERS_OFFER_BYID,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
