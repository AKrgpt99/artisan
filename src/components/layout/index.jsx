import React, { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Auth } from "aws-amplify";

import Header from "./Header";
import Menu from "./Menu";

function Layout({ routes }) {
  const [show, setShow] = useState(false);
  const location = useLocation();

  function signOut() {
    Auth.signOut().then(function () {
      console.log("signed out");
    });
  }

  return (
    <div className="landing-page flex flex-row">
      <Menu
        show={show}
        onClick={function () {
          setShow(false);
        }}
      >
        <Menu.Items signOut={signOut} location={location}>
          {routes.map(function ({ name, path, icons }) {
            return (
              <Menu.Item
                to={`/${path}`}
                icon={icons.regular}
                selectedIcon={icons.selected}
                selected={location.pathname === `/${path}`}
              >
                {name}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
      <div className="w-full pb-12">
        <Header
          onClick={function () {
            setShow(true);
          }}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
