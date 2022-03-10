import React from "react";

function TextArea({ value, onChange, placeholder }) {
  return (
    <textarea
      className="w-full h-48 rounded-lg px-5 py-3 drop-shadow-md"
      placeholder={placeholder}
    />
  );
}

export default TextArea;
