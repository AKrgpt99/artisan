import React, { useEffect, useState } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { API, graphqlOperation, Hub } from "aws-amplify";
import { useDispatch } from "react-redux";

import { setUser } from "../../features/users/userSlice";
import Header from "./Header";
import Menu from "./menu";
import Page from "./page";

import { createUser } from "../../graphql/mutations";
import { getUser } from "../../graphql/queries";

function Layout({ routes }) {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (window.innerWidth <= 1024) {
        setExpanded(true);
      }

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
          default:
            navigate("/");
            break;
        }
      });
    },
    [navigate]
  );

  return (
    <div className="landing-page flex flex-row">
      <Menu show={show} expanded={expanded}>
        <Menu.Items
          expanded={expanded}
          handleExpand={function () {
            setExpanded(!expanded);
          }}
        >
          {routes.map(function ({ name, path, icon }, i) {
            return (
              <Menu.Item
                to={`/${path}`}
                icon={icon}
                selected={location.pathname === `/${path}`}
                key={i}
                onClick={function () {
                  setShow(false);
                  setExpanded(false);
                }}
                expanded={expanded}
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
            setShow(!show);
          }}
          showMenu={show}
        />
        <Outlet />
      </div>
    </div>
  );
}

Layout.Page = Page;

export default Layout;
