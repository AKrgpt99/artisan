import React, { useState } from "react";
import { Link } from "react-router-dom";

function MenuItem({ to, selected, onClick, children, icon, selectedIcon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      className={`w-full h-12 flex flex-row justify-start items-center gap-9 px-7 transition hover:bg-secondary1 hover:text-white ${
        selected ? "bg-primary" : "bg-white"
      }`}
      onClick={onClick}
      onMouseEnter={function () {
        setHovered(true);
      }}
      onMouseLeave={function () {
        setHovered(false);
      }}
    >
      {selected || hovered ? selectedIcon : icon}
      <p className={`font-medium ${selected ? "text-white" : ""}`}>
        {children}
      </p>
    </Link>
  );
}

export default MenuItem;
