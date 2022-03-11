import React, { useEffect, useRef } from "react";

import ArrowDownIcon from "../../../assets/images/arrow_down_icon.svg";

function Select({
  options,
  onInputChange,
  inputValue,
  showOptions,
  onInputClick,
  onOptionClick,
  error,
}) {
  const ref = useRef();

  useEffect(
    function () {
      // Alert if clicked on outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onInputClick(event);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [ref]
  );

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-1">
      <div
        className={`w-full h-11 rounded-lg px-5 py-3 bg-white flex flex-row justify-end items-center relative shadow-md ${
          error && "border-2 border-error"
        }`}
        ref={ref}
      >
        <input
          type="text"
          className={`w-full outline-none font-medium placeholder:font-medium`}
          placeholder="Select"
          value={inputValue}
          onChange={onInputChange}
          onClick={onInputClick}
        />
        <img src={ArrowDownIcon} alt="select nft icon" />
        <div
          className={`w-full h-fit flex flex-col justify-center items-center absolute z-50 top-12 left-0 bg-white rounded-lg shadow-md p-1 transition ${
            !showOptions && "hidden"
          }`}
        >
          {options && options.length !== 0 ? (
            options.map(function (option, i) {
              return (
                <button
                  key={i}
                  value={option.value}
                  onClick={onOptionClick}
                  className="w-full px-5 py-3 text-left transition rounded-lg hover:bg-secondary1/[0.125] text-secondary1"
                >
                  {option.value}
                </button>
              );
            })
          ) : (
            <div className="w-full px-5 py-3 text-left rounded-lg font-medium text-secondary1/50">
              Nothing here :(
            </div>
          )}
        </div>
      </div>
      {error && (
        <p className="w-full text-left text-error font-bold text-xs">{error}</p>
      )}
    </div>
  );
}

export default Select;
