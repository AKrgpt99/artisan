import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 bg-primary rounded-full flex justify-center items-center transition hover:bg-secondary1"
    >
      {children}
    </button>
  );
}

export default Button;
