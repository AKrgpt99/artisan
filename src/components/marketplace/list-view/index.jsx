import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import Indicators from "./Indicators";

import { ReactComponent as ArrowLeft } from "../../../assets/images/arrow_left.svg";

function ListView({ children, fullWidth }) {
  const [itemIndex, setItemIndex] = useState(0);
  const md = useMediaQuery("(min-width: 768px)");

  function handleScrollLeft() {
    let scrollLeft = document.getElementById(
      "top-artists-container"
    ).scrollLeft;
    let clientWidth = document.querySelector(
      "#top-artists-container > button"
    ).clientWidth;

    if (scrollLeft !== 0) {
      document.getElementById("top-artists-container").scrollLeft -=
        clientWidth;
    }
  }

  function handleScrollRight() {
    let scrollLeft = document.getElementById(
      "top-artists-container"
    ).scrollLeft;
    let clientWidth = document.querySelector(
      "#top-artists-container > button"
    ).clientWidth;

    if (scrollLeft !== 2 * clientWidth) {
      document.getElementById("top-artists-container").scrollLeft +=
        clientWidth;
    }
  }

  return (
    <div className="w-full py-5 relative">
      <div className="w-fit h-full absolute top-0 left-0 hidden md:flex items-center z-[5]">
        <button
          className="w-10 h-10 bg-secondary1/50 rounded-full -mx-3 flex justify-center items-center"
          onClick={handleScrollLeft}
        >
          <ArrowLeft stroke="#fff" strokeWidth={2} />
        </button>
      </div>
      <div className="w-fit h-full absolute top-0 right-0 hidden md:flex items-center z-[5]">
        <button
          className="w-10 h-10 bg-secondary1/50 rounded-full -mx-3 flex justify-center items-center"
          onClick={handleScrollRight}
        >
          <ArrowLeft stroke="#fff" strokeWidth={2} className="rotate-180" />
        </button>
      </div>
      <div
        id="top-artists-container"
        className="w-full flex flex-row overflow-x-scroll overscroll-contain scroll-smooth pb-5 snap-x snap-mandatory no-scrollbar relative"
        onScroll={function (event) {
          const clientWidth = document.querySelector(
            "#top-artists-container > button"
          ).clientWidth;
          let tempIndex = Number.parseInt(
            event.currentTarget.scrollLeft / clientWidth
          );

          setItemIndex(tempIndex);
        }}
      >
        {React.Children.map(children, function (child, i) {
          return (
            <button
              key={i}
              className={`w-full md:w-1/2 2xl:w-1/3 h-[22rem] snap-start shrink-0 p-2`}
            >
              {child}
            </button>
          );
        })}
      </div>
      <Indicators
        length={children.length}
        index={itemIndex}
        hideLast={md ? true : false}
      />
    </div>
  );
}

export default ListView;
