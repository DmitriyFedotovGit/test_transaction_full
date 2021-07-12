import React from "react";
import "./dropDownList.css";
import { ReactComponent as CloseDropDownIcon } from "../../../assets/icon/closeDropDownIcon.svg";

const DropDownList = (props) => {
  const {
    dropDown,
    filterValue,
    setFilterValue,
    setDropDown,
    coinsList,
    chosseCoin,
  } = props;
  return (
    <div>
      <div className="dropDownList__input-container">
        <div>
          <input
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            placeholder="Search"
            className="dropDownList__input-search-coins"
          ></input>
        </div>
        <button
          onClick={() => setDropDown(!dropDown)}
          className="dropDownList__button-close-coins"
        >
          <CloseDropDownIcon />
        </button>
      </div>
      <div className="dropDownList__list-coins">
        {coinsList
          .filter((searchList) => {
            return (
              searchList.ticker.includes(filterValue.toLowerCase()) ||
              searchList.name.includes(filterValue.toLowerCase())
            );
          })
          .map((coin) => (
            <div
              onClick={() => chosseCoin(coin)}
              key={coin.ticker}
              className="dropDownList__item-coins"
            >
              <div className="dropDownList__item-icon-area">
                <img
                  className="dropDownList__icon-coin"
                  src={coin.image}
                  alt={coin.ticker}
                />
              </div>
              <div className="dropDownList__ticker-coin"> {coin.ticker}</div>
              <div className="dropDownList__fullname-coin"> {coin.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DropDownList;
