import * as axios from "axios";
import { API_KEY } from "./constants";

const instance = axios.create({
  baseURL: "https://api.changenow.io/v1/",
});

export const getCoinsListApi = {
  getAllCoins() {
    return instance
      .get(`currencies?api_key=${API_KEY}`, instance)
      .then((response) => {
        return response;
      });
  },
};

export const getMinimalCoinsValue = {
  getMinCoinsValue(coinsLeft, coinsRight) {
    return instance
      .get(
        `min-amount/${coinsLeft.ticker}_${coinsRight.ticker}?api_key=${API_KEY}`,
        instance
      )
      .then((response) => {
        return response;
      });
  },
};

export const getEstimatedCoinsValue = {
  getEstimatedAmmountCoinsValue(coinsLeft, coinsRight, enteredValue) {
    return instance
      .get(
        `exchange-amount/${enteredValue}/${coinsLeft.ticker}_${coinsRight.ticker}?api_key=${API_KEY}`,
        instance
      )
      .then((response) => {
        return response;
      });
  },
};
