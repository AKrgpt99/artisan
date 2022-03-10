import React, { useState } from "react";

import ArrowDownIcon from "../../../assets/images/arrow_down_icon.svg";

function Select({ options }) {
  const [selected, setSelected] = useState("Select");
  const [show, setShow] = useState(false);

  return (
    <button
      onClick={function () {
        setShow(!show);
      }}
      className="w-full h-11 rounded-lg px-5 py-3 bg-white flex flex-row justify-between items-center relative shadow-md"
    >
      <p
        className={`${
          selected === "Select" ? "text-secondary1/50" : "text-secondary1"
        }`}
      >
        {selected}
      </p>
      <img src={ArrowDownIcon} alt="select nft icon" />
      {show && (
        <div className="w-full h-fit flex flex-col justify-center items-center absolute z-50 top-14 left-0 bg-white rounded-lg shadow-md p-1 transition">
          <button
            onClick={function () {
              setSelected("Select");
              setShow(false);
            }}
            className="w-full px-5 py-3 text-left text-secondary1/50 transition rounded-lg hover:bg-secondary1/[0.125]"
          >
            Select
          </button>
          {options.map(function (option) {
            return (
              <button
                onClick={function () {
                  setSelected(option);
                  setShow(false);
                }}
                className="w-full px-5 py-3 text-left transition rounded-lg hover:bg-secondary1/[0.125] text-secondary1"
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </button>
  );
}

export default Select;
