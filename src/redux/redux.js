import { createStore, combineReducers, applyMiddleware } from "redux";
import ShareReducer from "./shareReducer/shareReducer";
import thunkMiddleware from "redux-thunk";
import ExchangeListReducer from "./exchangeListReducer/exchangeListReducer";

let reducers = combineReducers({
  shareData: ShareReducer,
  exchangeData: ExchangeListReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
