import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Carousel({ children }) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  return (
    <div className="w-full h-96 rounded-2xl bg-secondary3/75 relative overflow-hidden">
      {React.Children.map(children, function (child, i) {
        return (
          <CSSTransition
            in={carouselIndex === i}
            classNames={"selected-carousel-page"}
            timeout={350}
            onEnter={function () {
              setAnimationStarted(true);
            }}
            onEntered={function () {
              setAnimationStarted(false);
            }}
            key={i}
          >
            <div
              key={i}
              className={`w-full h-full absolute top-0 ${
                !animationStarted && carouselIndex === i
                  ? "left-0"
                  : "left-full"
              }`}
            >
              {child}
            </div>
          </CSSTransition>
        );
      })}
      <div className="flex justify-center items-center absolute right-4 bottom-5">
        {React.Children.map(children, function (_, i) {
          return (
            <CSSTransition
              in={carouselIndex === i}
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
                onClick={function () {
                  setCarouselIndex(i);
                }}
                className={`rounded-full mr-1.5 bg-secondary1/50 h-2 transition hover:bg-primary/50 ${
                  !animationStarted && carouselIndex === i ? "w-4" : "w-2"
                }`}
              ></button>
            </CSSTransition>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
