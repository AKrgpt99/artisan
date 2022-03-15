import React, { useEffect, useState } from "react";

import { ReactComponent as ArrowLeft } from "../../../assets/images/arrow_left.svg";

function ListView({ children }) {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showScrollLeft, setShowScrollLeft] = useState(true);
  const [showScrollRight, setShowScrollRight] = useState(true);

  useEffect(
    function () {
      if (scrollLeft === 0) {
        setShowScrollLeft(false);
        setShowScrollRight(true);
      }

      if (
        scrollLeft >=
        document.querySelector("#top-artists-container").scrollWidth -
          3 *
            document.querySelector("#top-artists-container > button")
              .clientWidth
      ) {
        setShowScrollLeft(true);
        setShowScrollRight(false);
      }
    },
    [scrollLeft]
  );

  function handleScrollLeft() {
    document.getElementById("top-artists-container").scrollLeft -=
      document.querySelector("#top-artists-container > button").clientWidth;
    setScrollLeft(document.getElementById("top-artists-container").scrollLeft);
  }

  function handleScrollRight() {
    document.getElementById("top-artists-container").scrollLeft +=
      document.querySelector("#top-artists-container > button").clientWidth;
    setScrollLeft(document.getElementById("top-artists-container").scrollLeft);
  }

  return (
    <div className="w-full relative">
      {showScrollLeft && (
        <div className="w-fit h-full absolute top-0 left-0 hidden md:flex items-center z-[5]">
          <button
            className="w-10 h-10 bg-secondary1/50 rounded-full -mx-3 flex justify-center items-center"
            onClick={handleScrollLeft}
          >
            <ArrowLeft stroke="#fff" strokeWidth={2} />
          </button>
        </div>
      )}
      {showScrollRight && (
        <div className="w-fit h-full absolute top-0 right-0 hidden md:flex items-center z-[5]">
          <button
            className="w-10 h-10 bg-secondary1/50 rounded-full -mx-3 flex justify-center items-center"
            onClick={handleScrollRight}
          >
            <ArrowLeft stroke="#fff" strokeWidth={2} className="rotate-180" />
          </button>
        </div>
      )}
      <div
        id="top-artists-container"
        className="w-full flex flex-row overflow-x-scroll overscroll-contain scroll-smooth pb-5 snap-x snap-mandatory no-scrollbar relative"
      >
        {React.Children.map(children, function (child, i) {
          return (
            <button
              key={i}
              className="w-full md:w-1/2 h-[22rem] snap-start shrink-0 p-2"
            >
              {child}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ListView;
