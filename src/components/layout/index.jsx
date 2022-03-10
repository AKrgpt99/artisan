import React, { useEffect, useState } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { API, graphqlOperation, Hub } from "aws-amplify";
import { useDispatch } from "react-redux";

import { setUser } from "../../features/users/userSlice";
import Header from "./Header";
import Menu from "./menu";

import { createUser } from "../../graphql/mutations";
import { getUser } from "../../graphql/queries";

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
            const userDetails = {
              username: data.username,
              email: data.attributes.email,
              sub: data.attributes.sub,
            };
            // check db
            API.graphql(graphqlOperation(getUser, { sub: userDetails.sub }))
              .then(function ({ data }) {
                if (!data.getUser) {
                  API.graphql(
                    graphqlOperation(createUser, { input: { ...userDetails } })
                  );
                  console.log("created user");
                } else {
                  console.log(data.getUser);
                }
              })
              .catch(function (error) {
                console.log(error);
              });

            // set local state
            dispatch(setUser(userDetails));

            navigate("/");
            break;
          case "signUp":
            console.log("signed up");
            break;
          case "signOut":
            console.log("signed out");
            dispatch(setUser(null));
            navigate("/");
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
                onClick={function () {
                  setShow(false);
                }}
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
