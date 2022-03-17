import React from "react";

import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

function Page({ children }) {
  return <div className="w-full h-fit">{children}</div>;
}

Page.Header = Header;
Page.Container = Container;
Page.Footer = Footer;

export default Page;
