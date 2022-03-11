import React from "react";

import Description from "./Description";

function Label({ children, error }) {
  return (
    <div className={`font-medium ${error && "text-error"}`}>{children}</div>
  );
}

Label.Description = Description;

export default Label;
