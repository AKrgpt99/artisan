import React from "react";

function Submit({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-auto px-5 h-12 rounded-full bg-primary border-2 border-primary text-white transition hover:bg-secondary1 hover:border-secondary1"
    >
      {children}
    </button>
  );
}

export default Submit;
