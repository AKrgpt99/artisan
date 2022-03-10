import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { useDispatch } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import "./App.css";

import Layout from "../components/layout";
import CreateToken from "../components/createToken";
import CreateCollection from "../components/createCollection";
import Header from "../components/aws-ui/Header";
import Footer from "../components/aws-ui/Footer";
import SignInFooter from "../components/aws-ui/SignInFooter";
import { fetchCurrentUser } from "../features/users/userSlice";
import { listUsers } from "../graphql/queries";

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

  useEffect(function () {
    dispatch(fetchCurrentUser());
    API.graphql(graphqlOperation(listUsers)).then(function (data) {
      console.log(data);
    });
  });

  return (
    <div className="p-0 lg:pl-60">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout routes={routes} />}>
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
            <Route path="create">
              <Route path="token" element={<CreateToken />} />
              <Route path="collection" element={<CreateCollection />} />
            </Route>
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
