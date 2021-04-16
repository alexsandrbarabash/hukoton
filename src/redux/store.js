import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/mainReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  mainReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
