import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as ArrowLeft } from "../../../assets/images/arrow_left.svg";

import "./Item.css";

function MenuItems({ children, expanded, handleExpand }) {
  const [expandHovered, setExpandHovered] = useState(false);

  return (
    <div className="flex flex-col w-full h-full lg:mt-2 gap-4 bg-white">
      <button
        onClick={handleExpand}
        className={`hidden w-full h-12 lg:flex flex-row justify-start items-center gap-9 px-7 transition hover:bg-secondary1 relative`}
        onMouseEnter={function () {
          setExpandHovered(true);
        }}
        onMouseLeave={function () {
          setExpandHovered(false);
        }}
      >
        <ArrowLeft
          stroke={expandHovered ? "#fff" : "#000"}
          strokeWidth={2}
          width={24}
          height={24}
          className={`transition ${!expanded && "rotate-180"}`}
        />
        <CSSTransition
          in={expanded}
          classNames="label"
          timeout={150}
          unmountOnExit
        >
          <p
            className={`font-medium transition absolute left-[5.5rem] ${
              expandHovered ? "text-white" : ""
            }`}
          >
            Collapse
          </p>
        </CSSTransition>
      </button>
      {children}
    </div>
  );
}

export default MenuItems;
