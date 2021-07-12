import { getCoinsListApi } from "../../api/api";
import { LOADING_ALL_COINS, WARNING } from "./constants";

let timerId;

export const getCoins = (coinsList) => {
  return {
    type: LOADING_ALL_COINS,
    payload: { coinsList },
  };
};

export const setWarning = (warningCode) => {
  return {
    type: WARNING,
    payload: { warningCode },
  };
};

export const getAllCoins = () => (dispatch) => {
  getCoinsListApi.getAllCoins().then((response) => {
    dispatch(getCoins(response.data));
  });
};

export const setWarningAction = (warningCode) => (dispatch) => {
  clearTimeout(timerId);
  dispatch(setWarning(warningCode));
  timerId = setTimeout(() => {
    dispatch(setWarning(""));
  }, 5000);
};
