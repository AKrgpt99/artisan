import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Layout from "../components/layout";

import Header from "../components/aws-ui/Header";
import Footer from "../components/aws-ui/Footer";
import SignInFooter from "../components/aws-ui/SignInFooter";
import { fetchCurrentUser } from "../features/users/userSlice";

import routes from "./routes";

const components = {
  Header: Header,
  SignIn: {
    Footer: SignInFooter,
  },
  Footer: Footer,
};

function App() {
  const dispatch = useDispatch();
  const user = useSelector(function (state) {
    return state.users.currentUser;
  });

  useEffect(function () {
    dispatch(fetchCurrentUser());
  });

  return (
    <div className="p-0 lg:pl-60">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout routes={routes} />}>
            {routes.map(function ({ path, element }, i) {
              return (
                <Route
                  index={path === "" ? true : null}
                  path={path !== "" ? path : null}
                  element={element}
                  key={i}
                />
              );
            })}
            <Route
              path="auth"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <Authenticator components={components} />
                )
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
