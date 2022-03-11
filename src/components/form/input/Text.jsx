import React from "react";

function Text({ value, onChange, placeholder, className, error }) {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-1">
      <input
        className={`w-full h-11 rounded-lg px-5 drop-shadow-md ${className} ${
          error && "border-2 border-error"
        }`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className="w-full text-left text-error font-bold text-xs">{error}</p>
      )}
    </div>
  );
}

export default Text;
