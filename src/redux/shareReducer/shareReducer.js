import { LOADING_ALL_COINS, WARNING } from "./constants";

/* 
  Предполагается что coinsList может использоваться на других страницах приложения,
  а warning - единая нотификация ошибок для всего приложения.
*/

let initialState = {
  coinsList: [],
  warning: "",
};

const ShareReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ALL_COINS: {
      return { ...state, coinsList: action.payload.coinsList };
    }
    case WARNING: {
      return { ...state, warning: action.payload.warningCode };
    }
    default:
      return state;
  }
};

export default ShareReducer;
