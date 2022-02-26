import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ChainsLogo } from "../../assets/images/Artisan_Chains.svg";
import { ReactComponent as AlarmIcon } from "../../assets/images/alarm_icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search_icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close_icon.svg";
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
import { ReactComponent as DoorExitIcon } from "../../assets/images/door_exit_icon.svg";
import { ReactComponent as DoorExitIconSelected } from "../../assets/images/door_exit_icon--selected.svg";

function Menu({ show, children, onClick }) {
  return (
    <>
      {/* Desktop */}
      <div
        className="h-screen hidden lg:flex flex-col justify-start items-start fixed top-0 left-0 z-10 bg-white"
        style={{ borderRight: "1px solid var(--secondary3)" }}
      >
        <Link
          to="/"
          className="h-12 flex flex-row justify-center items-center gap-4 mx-5 my-9"
        >
          <ChainsLogo width="48px" />
          <h2 style={{ color: "var(--primary)" }} className="font-bold">
            ARTISAN
          </h2>
        </Link>
        {children}
      </div>
      {/* End Desktop */}
      {/* Mobile */}
      {show && (
        <div
          className="h-screen w-full flex lg:hidden flex-col justify-start items-start fixed top-0 left-0 z-10 bg-white"
          style={{ borderRight: "1px solid var(--secondary3)" }}
        >
          <div className="h-12 w-full flex flex-row justify-between items-center px-5 my-10">
            <Link
              to="/"
              className="flex flex-row justify-center items-center gap-4"
              onClick={onClick}
            >
              <ChainsLogo width="48px" />
              <h2 style={{ color: "var(--primary)" }} className="font-bold">
                ARTISAN
              </h2>
            </Link>
            <div className="flex flex-row justify-center items-center gap-6">
              <button>
                <AlarmIcon />
              </button>
              <button onClick={onClick}>
                <CloseIcon />
              </button>
            </div>
          </div>
          <div className="w-full px-4 flex flex-row justify-between items-center">
            <div className="relative flex items-center">
              <SearchIcon className="absolute left-4" />
              <input
                type="text"
                placeholder="Shop Artisan..."
                className="rounded-full h-12 px-14"
                style={{
                  border: "1px solid var(--secondary3)",
                }}
              />
            </div>
            <button
              className="rounded-full w-12 h-12"
              style={{ backgroundColor: "var(--primary)" }}
            ></button>
          </div>
          {children}
        </div>
      )}
      {/* End Mobile */}
    </>
  );
}

Menu.Items = function ({ location, onClick }) {
  return (
    <div className="flex flex-col w-full h-full mt-6 gap-4">
      <Link
        to="/"
        className="w-full h-12 flex flex-row justify-start items-center gap-9 px-7"
        style={{
          backgroundColor:
            location.pathname === "/" ? "var(--primary)" : "white",
        }}
        onClick={onClick}
      >
        {location.pathname === "/" ? <MarketIconSelected /> : <MarketIcon />}
        <p
          className="font-medium"
          style={{
            color: location.pathname === "/" ? "white" : "inherit",
          }}
        >
          Marketplace
        </p>
      </Link>
      <Link
        to="artisan"
        className="w-full h-12 flex flex-row justify-start items-center gap-9 px-7"
        style={{
          backgroundColor:
            location.pathname === "/artisan" ? "var(--primary)" : "white",
        }}
        onClick={onClick}
      >
        {location.pathname === "/artisan" ? (
          <ProductsIconSelected />
        ) : (
          <ProductsIcon />
        )}
        <p
          className="font-medium"
          style={{
            color: location.pathname === "/artisan" ? "white" : "inherit",
          }}
        >
          MyArtisan
        </p>
      </Link>
      <Link
        to="promotions"
        className="w-full h-12 flex flex-row justify-start items-center gap-9 px-7"
        style={{
          backgroundColor:
            location.pathname === "/promotions" ? "var(--primary)" : "white",
        }}
        onClick={onClick}
      >
        {location.pathname === "/promotions" ? (
          <LendIconSelected />
        ) : (
          <LendIcon />
        )}
        <p
          className="font-medium"
          style={{
            color: location.pathname === "/promotions" ? "white" : "inherit",
          }}
        >
          MyPromotions
        </p>
      </Link>
      <Link
        to="rewards"
        className="w-full h-12 flex flex-row justify-start items-center gap-9 px-7"
        style={{
          backgroundColor:
            location.pathname === "/rewards" ? "var(--primary)" : "white",
        }}
        onClick={onClick}
      >
        {location.pathname === "/rewards" ? (
          <BorrowIconSelected />
        ) : (
          <BorrowIcon />
        )}
        <p
          className="font-medium"
          style={{
            color: location.pathname === "/rewards" ? "white" : "inherit",
          }}
        >
          MyRewards
        </p>
      </Link>
      <Link
        to="wallet"
        className="w-full h-12 flex flex-row justify-start items-center gap-9 px-7"
        style={{
          backgroundColor:
            location.pathname === "/wallet" ? "var(--primary)" : "white",
        }}
        onClick={onClick}
      >
        {location.pathname === "/wallet" ? (
          <WalletIconSelected />
        ) : (
          <WalletIcon />
        )}
        <p
          className="font-medium"
          style={{
            color: location.pathname === "/wallet" ? "white" : "inherit",
          }}
        >
          Wallet
        </p>
      </Link>
      <button
        className="w-full h-12 flex flex-row justify-start items-center gap-9 px-7"
        style={{
          backgroundColor:
            location.pathname === "/logout" ? "var(--primary)" : "white",
        }}
      >
        {location.pathname === "/logout" ? (
          <DoorExitIconSelected />
        ) : (
          <DoorExitIcon />
        )}
        <p
          className="font-medium"
          style={{
            color: location.pathname === "/logout" ? "white" : "inherit",
          }}
        >
          Logout
        </p>
      </button>
    </div>
  );
};

export default Menu;
