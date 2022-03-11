import React from "react";

function Number({ value, onChange, min, max, placeholder, error }) {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-1">
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className={`w-full h-11 px-5 rounded-lg drop-shadow-md z-10 ${
          error && "border-2 border-error"
        }`}
        placeholder={placeholder}
      />
      {error && (
        <p className="w-full text-left text-error font-bold text-xs">{error}</p>
      )}
    </div>
  );
}

export default Number;
