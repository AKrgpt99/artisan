import React, { useEffect, useState } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { API, graphqlOperation, Hub } from "aws-amplify";
import { useDispatch } from "react-redux";

import { setUser } from "../../features/users/userSlice";
import Header from "./Header";
import Menu from "./Menu";

import { createUser } from "../../graphql/mutations";

function Layout({ routes }) {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    function () {
      Hub.listen("auth", function ({ payload: { event, data } }) {
        switch (event) {
          case "signIn":
            console.log("signed in");
            navigate("/");
            dispatch(
              setUser({
                username: data.username,
                email: data.attributes.email,
                sub: data.attributes.sub,
              })
            );

            break;
          case "signUp":
            console.log("signed up");
            navigate("/auth");
            const userDetails = {
              username: data.user.username,
              sub: data.userSub,
            };

            API.graphql(graphqlOperation(createUser, { input: userDetails }))
              .then(function () {
                dispatch(setUser(userDetails));
              })
              .catch(function (error) {
                console.log(error);
              });

            break;
          case "signOut":
            console.log("signed out");
            navigate("/");
            dispatch(setUser(null));
            break;
        }
      });
    },
    [navigate]
  );

  return (
    <div className="landing-page flex flex-row">
      <Menu
        show={show}
        onClick={function () {
          setShow(false);
        }}
      >
        <Menu.Items>
          {routes.map(function ({ name, path, icons }, i) {
            return (
              <Menu.Item
                to={`/${path}`}
                icon={icons.regular}
                selectedIcon={icons.selected}
                selected={location.pathname === `/${path}`}
                key={i}
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
