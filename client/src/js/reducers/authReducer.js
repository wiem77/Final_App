import { LOGIN_PERSON, REGISTER_PERSON } from "../constants/ActionsTypes"
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

    default:
      return state
  }
}

export default authReducer
