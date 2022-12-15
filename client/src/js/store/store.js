import { compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { legacy_createStore as createStore } from "redux"
import rootReducer from "../reducers"
const middleware = [thunk]

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  )
)
export default store
