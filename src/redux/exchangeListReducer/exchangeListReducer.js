import {
  LOADING_MINIMAL_COINS_VALUE,
  LOADING_ESTIMATED_COINS_VALUE,
} from "./constants";

let initialState = {
  minimalCoins: null,
  estimatedAmount: null,
};

const ExchangeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_MINIMAL_COINS_VALUE: {
      return { ...state, minimalCoins: action.payload.minimalCoins };
    }
    case LOADING_ESTIMATED_COINS_VALUE: {
      return { ...state, estimatedAmount: action.payload.estimatedAmount };
    }
    default:
      return state;
  }
};

export default ExchangeListReducer;
