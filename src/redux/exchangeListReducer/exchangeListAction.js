import { getMinimalCoinsValue, getEstimatedCoinsValue } from "../../api/api";
import {
  LOADING_MINIMAL_COINS_VALUE,
  LOADING_ESTIMATED_COINS_VALUE,
} from "./constants";
import { setWarningAction } from "../shareReducer/shareAction";

export const getMinimalCoins = (minimalCoins) => {
  return {
    type: LOADING_MINIMAL_COINS_VALUE,
    payload: { minimalCoins },
  };
};
export const getEstimatedCoins = (estimatedAmount) => {
  return {
    type: LOADING_ESTIMATED_COINS_VALUE,
    payload: { estimatedAmount },
  };
};

export const getMinCoinsValue = (coinsLeft, coinsRight) => (dispatch) => {
  getMinimalCoinsValue
    .getMinCoinsValue(coinsLeft, coinsRight)
    .then((response) => {
      dispatch(getMinimalCoins(response.data));
    })
    .catch(() => {
      dispatch(setWarningAction("This pair is disabled now"));
    });
};

export const getEstAmmCoinsValue =
  (coinsLeft, coinsRight, enteredValue, minimalCoins) => (dispatch) => {
    getEstimatedCoinsValue
      .getEstimatedAmmountCoinsValue(
        coinsLeft,
        coinsRight,
        enteredValue,
        minimalCoins
      )
      .then((response) => {
        dispatch(
          getEstimatedCoins(
            response.data.estimatedAmount + Number(enteredValue)
          )
        );
      });
  };
