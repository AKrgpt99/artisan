import React from "react";

function Group({ children, className }) {
  return (
    <div
      className={`w-full flex flex-col justify-center items-start gap-2.5 ${className}`}
    >
      {children}
    </div>
  );
}

export default Group;
