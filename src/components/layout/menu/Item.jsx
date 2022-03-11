import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./Item.css";

function MenuItem({ to, selected, onClick, children, icon, expanded }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      className={`w-full h-12 flex flex-row justify-start items-center gap-9 px-7 transition hover:bg-secondary1 relative ${
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
      {React.cloneElement(icon, {
        stroke: hovered || selected ? "#fff" : "#000",
        className: "transition",
      })}
      <CSSTransition
        in={expanded}
        classNames="label"
        timeout={150}
        unmountOnExit
      >
        <p
          className={`font-medium transition absolute left-[5.5rem] ${
            hovered || selected ? "text-white" : ""
          }`}
        >
          {children}
        </p>
      </CSSTransition>
    </Link>
  );
}

export default MenuItem;
