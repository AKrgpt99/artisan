import React, { useState } from "react";

import { ReactComponent as ExpandIcon } from "../../assets/images/expand_icon.svg";
import { ReactComponent as CollapseIcon } from "../../assets/images/collapse_icon.svg";

function Section({ title, children, className, display }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <div
        className={`w-full flex flex-row justify-between items-center pt-8 ${className}`}
      >
        <button
          onClick={() => setCollapse(!collapse)}
          className="flex flex-row justify-center items-center gap-2"
        >
          <button onClick={() => setCollapse(!collapse)}>
            {collapse ? <CollapseIcon /> : <ExpandIcon />}
          </button>
          <h3 className="">{title}</h3>
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div
          className={`w-full ${
            display === "grid"
              ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          } gap-4 pt-5`}
        >
          {!collapse && children}
        </div>
      </div>
    </>
  );
}

export default Section;
