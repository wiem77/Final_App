import { GET_OFFERS, GET_OFFERS_OFFER_BYID } from "../constants/ActionsTypes"
const initState = {
  // token: localStorage.getItem("token"),
  // user: null,
  // isAuth: false,
  // isLoading: false,
  offers: [],
}
export const offerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_OFFERS:
      return { ...state, offers: payload }

    case GET_OFFERS_OFFER_BYID:
      return { ...state, offers: payload }

    default:
      return state
  }
}

export default offerReducer
