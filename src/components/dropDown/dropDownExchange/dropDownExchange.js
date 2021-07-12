import React from "react";
import "./dropDownExchange.css";
import { ReactComponent as OpenDropDownIcon } from "../../../assets/icon/openDropDownIcon.svg";

const DropDownExchange = (props) => {
  const {
    currentValue,
    minimalCoins,
    inputValue,
    setInputValue,
    disabledInput,
    setEnteredNumber,
    setDropDown,
    dropDown,
  } = props;
  return (
    <div
      key={currentValue.ticker}
      className="dropDownExchange__transaction-container"
    >
      <input
        className="dropDownExchange__transaction-input"
        placeholder={minimalCoins?.minAmount || ""}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={disabledInput}
        onBlur={
          setEnteredNumber ? () => setEnteredNumber(inputValue) : () => {}
        }
      ></input>
      <div className="dropDownExchange_area-coin">
        {currentValue.image && (
          <img
            className="dropDownExchange__icon-coin"
            src={currentValue.image}
            alt={currentValue.ticker}
          />
        )}
      </div>
      <div className="dropDownExchange__ticker-coin">{currentValue.ticker}</div>
      <button
        className="dropDownExchange__button-open-coins"
        onClick={() => setDropDown(!dropDown)}
      >
        <OpenDropDownIcon />
      </button>
    </div>
  );
};

export default DropDownExchange;
