import React, { useState } from "react";

function Section({ title, children, className }) {
  const [selected, setSelected] = useState("all");
  return (
    <>
      <div
        className={`w-full flex flex-col justify-center items-start gap-8 ${className}`}
      >
        {title && (
          <div className="flex flex-row justify-center items-center">
            <h3 className="font-semibold text-xl">{title}</h3>
          </div>
        )}
        <div className="w-full overflow-x-auto disable-scrollbar lg:w-fit p-1 h-14 lg:h-12 bg-secondary1/[0.125] rounded-full relative flex flex-row justify-between items-center gap-1">
          <button
            className={`px-[1.075rem] h-full rounded-full flex justify-center items-center transition ${
              selected === "all" ? "bg-white" : "hover:bg-secondary1/[0.125]"
            }`}
            onClick={function () {
              setSelected("all");
            }}
          >
            All
          </button>
          <button
            className={`px-[1.125rem] h-full rounded-full flex justify-center items-center transition ${
              selected === "created"
                ? "bg-white"
                : "hover:bg-secondary1/[0.125]"
            }`}
            onClick={function () {
              setSelected("created");
            }}
          >
            Created
          </button>
          <button
            className={`px-[1.125rem] h-full rounded-full flex justify-center items-center transition ${
              selected === "listed" ? "bg-white" : "hover:bg-secondary1/[0.125]"
            }`}
            onClick={function () {
              setSelected("listed");
            }}
          >
            Listed
          </button>
          <button
            className={`px-[1.125rem] h-full rounded-full flex justify-center items-center transition ${
              selected === "collected"
                ? "bg-white"
                : "hover:bg-secondary1/[0.125]"
            }`}
            onClick={function () {
              setSelected("collected");
            }}
          >
            Collected
          </button>
          <button
            className={`px-[1.125rem] h-full rounded-full flex justify-center items-center transition ${
              selected === "liked" ? "bg-white" : "hover:bg-secondary1/[0.125]"
            }`}
            onClick={function () {
              setSelected("liked");
            }}
          >
            Liked
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {children ? (
          <div
            className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10`}
          >
            {children}
          </div>
        ) : (
          <div className="w-full h-[22rem] bg-secondary1/[0.125] rounded-xl mt-10 flex flex-col justify-center items-center gap-3">
            <p className="font-bold text-secondary1/50 text-lg">No items</p>
            <p className="font-medium text-secondary1/50 text-sm">
              <button className="inline text-sm text-primary hover:underline transition hover:text-secondary1">
                Create
              </button>{" "}
              to get started
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Section;
