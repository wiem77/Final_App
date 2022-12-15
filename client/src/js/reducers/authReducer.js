import {
  AUTH_ERRORS,
  GET_AUTH_PERSON,
  LOGIN_PERSON,
  LOGOUT_PERSON,
  PERSON_LOADING,
  REGISTER_PERSON,
  UPDATE_OFFERS,
  ADD_OFFER,
  GET_OFFERS,
  DELETE_OFFERS,
} from "../constants/ActionsTypes"
const initState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  isLoading: false,
}
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_PERSON:
      localStorage.setItem("token", payload.token)
      return { ...state, isLoading: false, isAuth: true, ...payload }
    case LOGIN_PERSON:
      localStorage.setItem("token", payload.token)
      return { ...state, isLoading: false, isAuth: true, ...payload }
    case GET_OFFERS:
      localStorage.setItem("token", payload.token)
      return { ...state, isLoading: false, isAuth: true, ...payload }

    default:
      return state
  }
}

export default authReducer
