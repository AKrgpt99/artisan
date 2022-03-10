import React, { useState } from "react";

function Switch({ state, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      className={`w-12 h-8 border-2 flex ${
        state === "off"
          ? "border-primary/50 justify-start"
          : "border-primary justify-end"
      } items-center rounded-full p-0.5`}
      onMouseEnter={function () {
        setHovered(true);
      }}
      onMouseLeave={function () {
        setHovered(false);
      }}
    >
      <div
        className={`w-6 h-6 rounded-full transition ${
          hovered ? "bg-secondary1" : "bg-primary"
        }`}
      ></div>
    </button>
  );
}

export default Switch;
