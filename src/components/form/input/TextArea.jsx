import React from "react";

function TextArea({ value, onChange, placeholder, error }) {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-1">
      <textarea
        className={`w-full h-48 rounded-lg px-5 py-3 drop-shadow-md ${
          error && "border-2 border-error"
        }`}
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

export default TextArea;
