import React from "react";

function Header({ children }) {
  return (
    <div className="w-full px-5 lg:pl-12 pt-40">
      <h2 className="w-full text-left font-bold text-primary/50 text-4xl">
        {children}
      </h2>
    </div>
  );
}

export default Header;
