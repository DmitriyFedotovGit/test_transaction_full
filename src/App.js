import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import DropDown from "./components/dropDown/dropDown";
import Header from "./components/header/header";
import {
  getAllCoins,
  setWarningAction,
} from "./redux/shareReducer/shareAction";
import {
  getMinCoinsValue,
  getEstAmmCoinsValue,
} from "./redux/exchangeListReducer/exchangeListAction";
import { ReactComponent as ReverseIcon } from "./assets/icon/reverseIcon.svg";
import AddressBlock from "./components/addressBlock/addressBlock";

const App = (props) => {
  const {
    getAllCoins,
    coinsList,
    minimalCoins,
    getMinCoinsValue,
    getEstAmmCoinsValue,
    warning,
    setWarning,
    estimatedAmount,
  } = props;
  const [coinsLeft, setCoinsLeft] = useState({});
  const [coinsRight, setCoinsRight] = useState({});
  const [enteredValue, setEnteredValue] = useState("");
  const [estimatedAmountValue, setEstimatedAmountValue] =
    useState(estimatedAmount);

  useEffect(() => {
    if (coinsList.length !== 0) {
      if (!coinsLeft.ticker) {
        setCoinsLeft(coinsList[1]);
      }
      if (!coinsRight.ticker) {
        setCoinsRight(coinsList[2]);
      }
    }
  }, [coinsList, coinsLeft, coinsRight]);

  useEffect(() => {
    setEstimatedAmountValue(estimatedAmount);
    if (warning) {
      setEstimatedAmountValue("—");
    }
  }, [estimatedAmount, warning]);

  useEffect(() => {
    getAllCoins();
  }, [getAllCoins]);

  useEffect(() => {
    if (coinsLeft.ticker && coinsRight.ticker) {
      getMinCoinsValue(coinsLeft, coinsRight);
    }
  }, [coinsLeft, coinsRight, getMinCoinsValue]);

  useEffect(() => {
    if (coinsLeft.ticker && coinsRight.ticker && enteredValue) {
      if (enteredValue < minimalCoins.minAmount) {
        setWarning(`Minimum transaction amount: ${minimalCoins.minAmount}`);
      } else {
        getEstAmmCoinsValue(coinsLeft, coinsRight, enteredValue, minimalCoins);
      }
    }
  }, [
    coinsLeft,
    coinsRight,
    enteredValue,
    minimalCoins,
    getEstAmmCoinsValue,
    setWarning,
  ]);

  const reverse = () => {
    const temporaryState = { ...coinsLeft };
    setCoinsLeft(coinsRight);
    setCoinsRight(temporaryState);
  };
  const filterCoinsList = coinsList.filter((coin) => {
    return (
      coin.ticker !== coinsRight.ticker && coin.ticker !== coinsLeft.ticker
    );
  });

  return (
    <div className="app">
      <Header />
      <div className="app__dropDown-body">
        <DropDown
          minimalCoins={minimalCoins}
          coinsList={filterCoinsList}
          currentValue={coinsLeft}
          setCurrentValue={setCoinsLeft}
          setEnteredNumber={setEnteredValue}
        />
        <ReverseIcon onClick={reverse} className="app__button-reverse" />
        <DropDown
          coinsList={filterCoinsList}
          currentValue={coinsRight}
          inputValueDefault={estimatedAmountValue}
          setCurrentValue={setCoinsRight}
          disabledInput={true}
        />
      </div>
      <AddressBlock coinsRight={coinsRight} warning={warning} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  coinsList: state.shareData.coinsList,
  warning: state.shareData.warning,
  minimalCoins: state.exchangeData.minimalCoins,
  estimatedAmount: state.exchangeData.estimatedAmount,
});
const mapDispatchToProps = (dispatch) => ({
  getAllCoins: (...args) => dispatch(getAllCoins(...args)),
  getMinCoinsValue: (...args) => dispatch(getMinCoinsValue(...args)),
  setWarning: (...args) => dispatch(setWarningAction(...args)),
  getEstAmmCoinsValue: (...args) => dispatch(getEstAmmCoinsValue(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
