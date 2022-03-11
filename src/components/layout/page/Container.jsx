import React from "react";

function Container({ children }) {
  return (
    <div className="w-full px-5 lg:pl-12 mt-8 flex flex-col justify-center items-start">
      {children}
    </div>
  );
}

export default Container;
