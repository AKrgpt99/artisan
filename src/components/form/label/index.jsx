import React from "react";

import Description from "./Description";

function Label({ children }) {
  return <div className="font-medium">{children}</div>;
}

Label.Description = Description;

export default Label;
