import React, { useRef } from "react";

import { ReactComponent as ImageIcon } from "../../../assets/images/image_icon.svg";

function Upload({ value, onChange, variation, accept, error }) {
  const inputRef = useRef();

  return (
    <>
      {value ? (
        <button
          onClick={function () {
            inputRef.current.click();
          }}
          className={`${
            variation === "feature"
              ? "w-80 h-60 rounded-lg"
              : variation === "logo"
              ? "w-40 h-40 rounded-full"
              : variation === "banner"
              ? "w-full h-60 rounded-lg px-1"
              : ""
          } transition border-4 border-primary hover:opacity-90 border-dashed flex justify-center items-center transition hover:border-secondary1 hover:bg-secondary1/[0.125]`}
        >
          <img
            className={`${
              variation === "feature"
                ? "w-[19rem] h-[14rem] rounded-lg"
                : variation === "logo"
                ? "w-[9rem] h-[9rem] rounded-full"
                : variation === "banner"
                ? "w-full h-[14rem] rounded-lg"
                : ""
            } object-cover drop-shadow-md`}
            src={value}
            alt="content upload preview"
          />
        </button>
      ) : (
        <div className="w-full h-fit flex flex-col justify-center items-start gap-1">
          <button
            onClick={function () {
              inputRef.current.click();
            }}
            className={`${
              variation === "feature"
                ? "w-80 h-60 rounded-lg"
                : variation === "logo"
                ? "w-40 h-40 rounded-full"
                : variation === "banner"
                ? "w-full h-60 rounded-lg px-1"
                : ""
            } border-4 rounded-lg border-dashed flex justify-center items-center transition hover:border-secondary1 hover:bg-secondary1/[0.125] ${
              error ? "border-error" : "border-primary"
            }`}
          >
            <ImageIcon
              width="5rem"
              height="5rem"
              strokeWidth={2}
              stroke={error ? "#b00020" : "#9b41b2"}
            />
          </button>
          {error && (
            <p className="w-full text-left text-error font-bold text-xs">
              {error}
            </p>
          )}
        </div>
      )}
      <input
        onChange={onChange}
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
      />
    </>
  );
}

export default Upload;
