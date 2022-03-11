import React, { useRef } from "react";

import InstagramLogo from "../../../../assets/images/instagram-brands.svg";

function Instagram({ value, onChange, placeholder, error }) {
  const ref = useRef();

  return (
    <div className="w-full flex justify-start items-center relative">
      <img
        src={InstagramLogo}
        alt="instagram icon"
        className={`absolute w-4 h-4 left-4 opacity-50 ${
          error && "error-filter"
        }`}
      />
      <p
        className="absolute left-12 text-secondary1/50 font-medium"
        onClick={function () {
          ref.current.focus();
        }}
      >
        https://instagram.com/
      </p>
      <input
        type="text"
        className={`w-full h-11 font-medium text-secondary1 rounded-lg bg-white pl-[14.7rem] placeholder:font-medium placeholder:text-secondary1/50 shadow-md ${
          error && "border-2 border-error"
        }`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
}

export default Instagram;
