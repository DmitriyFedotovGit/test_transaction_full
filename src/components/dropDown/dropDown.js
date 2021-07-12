import React, { useState, useEffect } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import "./dropDown.css";
import DropDownExchange from "./dropDownExchange/dropDownExchange";
import DropDownList from "./dropDownList/dropDownList";

const DropDown = (props) => {
  const {
    minimalCoins,
    coinsList,
    currentValue,
    setCurrentValue,
    setEnteredNumber,
    inputValueDefault,
    disabledInput,
  } = props;
  const [dropDown, setDropDown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const chosseCoin = (coin) => {
    setCurrentValue(coin);
    setDropDown(!dropDown);
  };
  useEffect(() => {
    if (inputValueDefault) {
      setInputValue(inputValueDefault);
    }
  }, [inputValueDefault]);
  const ref = useOnclickOutside(() => {
    setDropDown(false);
  });
  const handleClickBtn = (e) => {
    if (
      e.target.className !== "dropDown__input-search-coins" &&
      e.target.className !== "dropDown__input-container"
    ) {
      setDropDown(!dropDown);
    }
  };
  return (
    <div className="dropDown__body">
      <DropDownExchange
        currentValue={currentValue}
        minimalCoins={minimalCoins}
        inputValue={inputValue}
        setInputValue={setInputValue}
        disabledInput={disabledInput}
        setEnteredNumber={setEnteredNumber}
        setDropDown={setDropDown}
        dropDown={dropDown}
      />

      <div>
        {dropDown && (
          <div
            className="dropDown__container"
            onClick={handleClickBtn}
            ref={ref}
          >
            <DropDownList
              dropDown={dropDown}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              setDropDown={setDropDown}
              coinsList={coinsList}
              chosseCoin={chosseCoin}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
