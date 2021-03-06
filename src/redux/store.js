import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
  userReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
