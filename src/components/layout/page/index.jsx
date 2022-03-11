import React from "react";

import Header from "./Header";
import Container from "./Container";

function Page({ children }) {
  return <div className="w-full h-fit">{children}</div>;
}

Page.Header = Header;
Page.Container = Container;

export default Page;
