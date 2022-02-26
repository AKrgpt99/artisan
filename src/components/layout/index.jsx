import React, { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";

import Header from "./Header";
import Menu from "./Menu";

function Layout({ username }) {
  const [show, setShow] = useState(false);
  const location = useLocation();

  return (
    <div className="landing-page flex flex-row">
      <Menu show={show} onClick={() => setShow(false)}>
        <Menu.Items location={location} onClick={() => setShow(false)} />
      </Menu>
      <div>
        <Header username={username} onClick={() => setShow(true)} />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
