import {
  UPDATE_OFFERS,
  ADD_OFFER,
  GET_OFFERS,
  DELETE_OFFERS,
  GET_OFFERS_OFFER_BYID,
} from "../constants/ActionsTypes"
const initState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  isLoading: false,
  offers: [],
}
export const offerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_OFFERS:
      localStorage.setItem("token", payload.token)
      return { ...state, isLoading: false, isAuth: true, offers: payload }
    case ADD_OFFER:
      localStorage.setItem("token", payload.token)
      return { ...state, isLoading: false, isAuth: true, ...payload }
    case DELETE_OFFERS:
      localStorage.setItem("token", payload.token)
      return { ...state, isLoading: false, isAuth: true, ...payload }
    case UPDATE_OFFERS:
      localStorage.setItem("token", payload.token)
      return { ...state, isLoading: false, isAuth: true, ...payload }
    case GET_OFFERS_OFFER_BYID:
      localStorage.setItem("token", payload.token)
      return { ...state, isLoading: false, isAuth: true, ...payload }

    default:
      return state
  }
}

export default offerReducer
