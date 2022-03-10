import React from "react";

function Text({ value, onChange, placeholder }) {
  return (
    <input
      className="w-full h-11 rounded-lg px-5 drop-shadow-md"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Text;
