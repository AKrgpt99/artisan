import React, { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";

import Header from "./Header";
import Menu from "./Menu";

import { ReactComponent as MarketIcon } from "../../assets/images/market_icon.svg";
import { ReactComponent as MarketIconSelected } from "../../assets/images/market_icon--selected.svg";
import { ReactComponent as ProductsIcon } from "../../assets/images/products_icon.svg";
import { ReactComponent as ProductsIconSelected } from "../../assets/images/products_icon--selected.svg";
import { ReactComponent as LendIcon } from "../../assets/images/lend_icon.svg";
import { ReactComponent as LendIconSelected } from "../../assets/images/lend_icon--selected.svg";
import { ReactComponent as BorrowIcon } from "../../assets/images/borrow_icon.svg";
import { ReactComponent as BorrowIconSelected } from "../../assets/images/borrow_icon--selected.svg";
import { ReactComponent as WalletIcon } from "../../assets/images/wallet_icon.svg";
import { ReactComponent as WalletIconSelected } from "../../assets/images/wallet_icon--selected.svg";

function Layout({ username, signOut }) {
  const [show, setShow] = useState(false);
  const location = useLocation();

  return (
    <div className="landing-page flex flex-row">
      <Menu show={show} onClick={() => setShow(false)}>
        <Menu.Items location={location} signOut={signOut}>
          <Menu.Item
            to="/"
            location={location}
            onClick={() => setShow(false)}
            icon={<MarketIcon />}
            selectedIcon={<MarketIconSelected />}
          >
            Marketplace
          </Menu.Item>
          <Menu.Item
            to="/artisan"
            location={location}
            onClick={() => setShow(false)}
            icon={<ProductsIcon />}
            selectedIcon={<ProductsIconSelected />}
          >
            MyArtisan
          </Menu.Item>
          <Menu.Item
            to="/promotions"
            location={location}
            onClick={() => setShow(false)}
            icon={<LendIcon />}
            selectedIcon={<LendIconSelected />}
          >
            MyPromotions
          </Menu.Item>
          <Menu.Item
            to="/rewards"
            location={location}
            onClick={() => setShow(false)}
            icon={<BorrowIcon />}
            selectedIcon={<BorrowIconSelected />}
          >
            MyRewards
          </Menu.Item>
          <Menu.Item
            to="/wallet"
            location={location}
            onClick={() => setShow(false)}
            icon={<WalletIcon />}
            selectedIcon={<WalletIconSelected />}
          >
            Wallet
          </Menu.Item>
        </Menu.Items>
      </Menu>
      <div className="w-full pb-12">
        <Header username={username} onClick={() => setShow(true)} />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
