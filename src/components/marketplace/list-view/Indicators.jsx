import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function Indicators({ length, index, onChange, hideLast }) {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [totalIndicators, setTotalIndicators] = useState([]);

  useEffect(
    function () {
      let tempIndicators = [];
      for (let i = 0; i < length; i++) {
        tempIndicators.push(i);
      }
      setTotalIndicators(tempIndicators);
    },
    [length]
  );

  return (
    <div className="flex justify-center items-center absolute right-4 bottom-5">
      {totalIndicators.map(function (_, i) {
        if (i !== length - 1 || !hideLast) {
          return (
            <CSSTransition
              in={index === i}
              classNames="selected-carousel-button"
              timeout={250}
              onEnter={function () {
                setAnimationStarted(true);
              }}
              onExit={function () {
                setAnimationStarted(false);
              }}
              key={i}
            >
              <button
                value={index}
                onClick={onChange}
                className={`rounded-full mr-1.5 bg-secondary1/50 h-2 transition hover:bg-primary/50 ${
                  !animationStarted && index === i ? "w-4" : "w-2"
                }`}
              ></button>
            </CSSTransition>
          );
        }
      })}
    </div>
  );
}

export default Indicators;
