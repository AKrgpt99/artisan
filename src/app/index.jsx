import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import "./App.css";

import Layout from "../components/layout";

import Header from "../components/aws-ui/Header";
import Footer from "../components/aws-ui/Footer";
import SignInFooter from "../components/aws-ui/SignInFooter";

import routes from "./routes";

const components = {
  Header: Header,
  SignIn: {
    Footer: SignInFooter,
  },
  Footer: Footer,
};

function App() {
  return (
    <div className="p-0 lg:pl-60">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout routes={routes} />}>
            {routes.map(function ({ path, element }) {
              return (
                <Route
                  index={path === "" ? true : null}
                  path={path !== "" ? path : null}
                  element={element}
                />
              );
            })}
            <Route
              path="auth"
              element={<Authenticator components={components} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
