import React from "react";

import CloseIcon from "../../assets/images/close_icon.svg";

function TraitList({ traits, onRemove }) {
  return (
    <div className="w-full grid grid-cols-3 gap-2.5">
      {traits.map(function (trait) {
        const [key, value] = trait.split(":");
        return (
          <div className="w-full py-2 flex flex-col justify-center items-center border-2 border-primary bg-primary/[0.125] rounded-lg relative">
            <p className="w-full text-center text-xs">{key}</p>
            <p className="w-full text-center font-bold">{value}</p>
            <button
              onClick={function () {
                onRemove(key);
              }}
              className="w-5 h-5 absolute top-1 right-1"
            >
              <img src={CloseIcon} className="w-5 h-5" alt="" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TraitList;
