import React from "react";

function MyArtisan() {
  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundColor: "var(--secondary4)" }}
    >
      <div className="w-full px-5 lg:pl-72 pt-36 pb-6 bg-white">
        <h2>MyArtisan</h2>
      </div>
      <div className="w-full px-5 lg:pl-72 mt-8 flex flex-col justify-center items-start">
        <div className="flex flex-row justify-start items-center gap-5">
          <button
            className="font-semibold px-6 py-2 rounded-full text-white"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Create
          </button>
          <button
            className="font-semibold px-6 py-2 rounded-full"
            style={{
              border: "1px solid var(--primary)",
              color: "var(--primary)",
            }}
          >
            Import
          </button>
        </div>
        <div className="w-full flex flex-row justify-between items-center"></div>
      </div>
    </div>
  );
}

export default MyArtisan;
