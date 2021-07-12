import React from "react";
import "./addressBlock.css";

const AddressBlock = (props) => {
  const { warning, coinsRight } = props;
  return (
    <div className="addressBlock">
      <div className="addressBlock__input-container">
        <span className="addressBlock__text-input">
          Your {coinsRight.name} address
        </span>
        <input className="addressBlock__input"></input>
      </div>
      <div className="addressBlock__button-container">
        <button className={`addressBlock__button`}>EXCHANGE</button>
        <div
          className={`addressBlock__warning ${
            warning ? "addressBlock__warning--active" : ""
          }`}
        >
          {warning}
        </div>
      </div>
    </div>
  );
};

export default AddressBlock;
