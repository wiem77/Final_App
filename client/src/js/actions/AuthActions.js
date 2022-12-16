import axios from "axios"
import {
  LOGIN_PERSON,
  REGISTER_PERSON,
  GET_OFFERS,
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
// Get_authPerson
// export const getauthPerson = () => async (dispatch) => {
//   try {
//     //headers
//     const config = {
//       headers: {
//         "x-auth-token": localStorage.getItem("token"),
//       },
//     }
//     const res = await axios.get("/users/person", config)
//     dispatch({
//       type: GET_AUTH_PERSON,
//       payload: res.data,
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
//GetOffer
export const getOffers = () => async (dispatch) => {
  try {
    const res = await axios.get("/offers/offer")
    dispatch({
      type: GET_OFFERS,
      payload: res.data,
    })
  } catch (error) {
    console.log(error.response.data)
  }
}

//UpdateOffer
export const updateOffer = (id, updatedOffer) => async (dispatch) => {
  try {
    const res = await axios.put(`/offers/edit/${id}`, updatedOffer)
    dispatch(getOffers())
  } catch (error) {
    console.log(error.response.data)
  }
}

//addOffer
export const addOffer = (newoffer) => async (dispatch) => {
  try {
    const res = await axios.post("/offers/addNewOffer", newoffer)
    dispatch(getOffers())
  } catch (error) {
    console.log(error.response.data)
  }
}
//deleteOffer
export const delteOffer = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/offers/delete/${id}`)
    dispatch(getOffers())
  } catch (error) {
    console.log(error.response.data)
  }
}
//GETOFFERBYID
export const getOfferByid = (idof) => async (dispatch) => {
  try {
    const res = await axios.get(`/offers/offer/${idof}`)
    dispatch({
      type: GET_OFFERS_OFFER_BYID,
      payload: res.data,
    })
  } catch (error) {
    console.log(error.response.data)
  }
}
