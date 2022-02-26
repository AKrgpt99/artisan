import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ChainsLogo } from "../../assets/images/Artisan_Chains.svg";
import { ReactComponent as AlarmIcon } from "../../assets/images/alarm_icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search_icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/menu_icon.svg";

function Header({ username, onClick }) {
  return (
    <header className="w-screen h-32 flex flex-row justify-between items-center px-5 lg:pl-72 lg:pr-5 fixed top-0 left-0 bg-white">
      <Link
        to="/"
        className="flex lg:hidden flex-row justify-center items-center gap-4"
      >
        <ChainsLogo width="48px" />
        <h2 style={{ color: "var(--primary)" }} className="font-bold">
          ARTISAN
        </h2>
      </Link>
      <div className="relative hidden lg:flex items-center">
        <SearchIcon className="absolute left-4" />
        <input
          type="text"
          placeholder="Shop Artisan..."
          className="rounded-full w-96 h-12 px-14"
          style={{
            border: "1px solid var(--secondary3)",
          }}
        />
      </div>
      <div className="flex flex-row items-center gap-5 lg:gap-9">
        <button
          className="rounded-full w-10 h-10 hidden lg:flex flex-row justify-center items-center"
          style={{ border: "1px solid var(--secondary3)" }}
        >
          <AlarmIcon />
        </button>
        <button className="rounded-full w-10 h-10 lg:hidden flex flex-row justify-center items-center">
          <AlarmIcon />
        </button>
        <button
          onClick={onClick}
          className="rounded-full w-10 h-10 lg:hidden flex flex-row justify-center items-center"
        >
          <MenuIcon />
        </button>
        <button
          className="rounded-full w-fit h-10 hidden lg:flex flex-row justify-center items-center p-1"
          style={{ border: "1px solid var(--secondary3)" }}
        >
          <div
            className="rounded-full w-8 h-8"
            style={{ backgroundColor: "var(--primary)" }}
          ></div>
          <p className="font-medium mx-5">{username}</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
