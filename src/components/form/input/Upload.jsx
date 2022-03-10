import React, { useRef } from "react";

function Upload({ value, onChange, children }) {
  const inputRef = useRef();

  return (
    <>
      {value && (
        <img
          className="w-full h-fit rounded-lg object-fit drop-shadow-md"
          src={value}
          alt="content upload preview"
        />
      )}
      <input
        onChange={onChange}
        ref={inputRef}
        type="file"
        accept="*"
        className="hidden"
      />
      <button
        onClick={function () {
          inputRef.current.click();
        }}
        className="w-36 h-9 text-center rounded-full font-semibold text-primary border-2 border-primary transition hover:bg-secondary1 hover:text-white hover:border-secondary1"
      >
        {children}
      </button>
      <p className="text-sm">
        Accepted formats: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB,
        GLTF
      </p>
    </>
  );
}

export default Upload;
