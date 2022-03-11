import React from "react";

import GlobeIcon from "../../../../assets/images/globe-solid.svg";

function Website({ value, onChange, error }) {
  return (
    <div className="w-full flex justify-start items-center relative">
      <img
        src={GlobeIcon}
        alt="website icon"
        className={`absolute w-4 h-4 left-4 opacity-50 ${
          error && "error-filter"
        }`}
      />
      <input
        type="text"
        className={`w-full h-11 font-medium text-secondary1 rounded-lg bg-white px-12 placeholder:font-medium placeholder:text-secondary1/50 shadow-md ${
          error && "border-2 border-error"
        }`}
        placeholder="your-website.ca"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Website;
