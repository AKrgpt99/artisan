import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import Layout from "../components/layout";
import Marketplace from "../components/marketplace";
import MyArtisan from "../components/myArtisan";
import MyPromotions from "../components/myPromotions";
import MyRewards from "../components/myRewards";
import Wallet from "../components/wallet";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Layout username={user.username} signOut={signOut} />}
            >
              <Route index element={<Marketplace />} />
              <Route path="artisan" element={<MyArtisan />} />
              <Route path="promotions" element={<MyPromotions />} />
              <Route path="rewards" element={<MyRewards />} />
              <Route path="wallet" element={<Wallet />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </Authenticator>
  );
}

export default App;
