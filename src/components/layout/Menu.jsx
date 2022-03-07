import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as ChainsLogo } from "../../assets/images/Artisan_Chains.svg";
import { ReactComponent as AlarmIcon } from "../../assets/images/alarm_icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search_icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close_icon.svg";
import { ReactComponent as DoorExitIcon } from "../../assets/images/door_exit_icon.svg";
import { ReactComponent as DoorExitIconSelected } from "../../assets/images/door_exit_icon--selected.svg";
import { ReactComponent as DoorEnterIcon } from "../../assets/images/door_enter_icon.svg";
import { ReactComponent as DoorEnterIconSelected } from "../../assets/images/door_enter_icon--selected.svg";

function Menu({ show, children, onClick }) {
  return (
    <>
      {/* Desktop */}
      <div className="h-screen hidden lg:flex flex-col justify-start items-start fixed top-0 left-0 z-20 bg-white border-r-2 border-secondary3">
        <Link
          to="/"
          className="h-12 flex flex-row justify-center items-center gap-4 mx-5 my-9"
        >
          <ChainsLogo width="48px" />
          <h2 className="font-bold text-primary">ARTISAN</h2>
        </Link>
        {children}
      </div>
      {/* End Desktop */}
      {/* Mobile */}
      {show && (
        <div className="h-screen w-full flex lg:hidden flex-col justify-start items-start fixed top-0 left-0 z-20 bg-white border-r-2 border-secondary3">
          <div className="h-12 w-full flex flex-row justify-between items-center px-5 my-10">
            <Link
              to="/"
              className="flex flex-row justify-center items-center gap-4"
              onClick={onClick}
            >
              <ChainsLogo width="48px" />
              <h2 className="font-bold text-primary">ARTISAN</h2>
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
                className="rounded-full h-12 px-14 border-2 border-secondary3"
              />
            </div>
            <button className="rounded-full w-12 h-12 bg-primary"></button>
          </div>
          {children}
        </div>
      )}
      {/* End Mobile */}
    </>
  );
}

function MenuItem({ to, selected, onClick, children, icon, selectedIcon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      className={`w-full h-12 flex flex-row justify-start items-center gap-9 px-7 transition hover:bg-secondary1 hover:text-white ${
        selected ? "bg-primary" : "bg-white"
      }`}
      onClick={onClick}
      onMouseEnter={function () {
        setHovered(true);
      }}
      onMouseLeave={function () {
        setHovered(false);
      }}
    >
      {selected || hovered ? selectedIcon : icon}
      <p className={`font-medium ${selected ? "text-white" : ""}`}>
        {children}
      </p>
    </Link>
  );
}

Menu.Item = MenuItem;

function MenuItems({ children, signOut, location }) {
  const [authButtonHovered, setAuthButtonHovered] = useState(false);
  const user = useSelector(function (state) {
    return state.users.currentUser;
  });

  return (
    <div className="flex flex-col w-full h-full mt-6 gap-4">
      {children}
      {user ? (
        <button
          onClick={signOut}
          className="w-full h-12 flex flex-row justify-start items-center gap-9 px-7 bg-white transition hover:bg-secondary1 hover:text-white"
          onMouseEnter={function () {
            setAuthButtonHovered(true);
          }}
          onMouseLeave={function () {
            setAuthButtonHovered(false);
          }}
        >
          {authButtonHovered ? <DoorExitIconSelected /> : <DoorExitIcon />}
          <p className="font-medium">Sign out</p>
        </button>
      ) : (
        <Link
          to="/auth"
          className={`w-full h-12 flex flex-row justify-start items-center gap-9 px-7 transition hover:bg-secondary1 hover:text-white ${
            location.pathname === "/auth" ? "bg-primary" : "bg-white"
          }`}
          onMouseEnter={function () {
            setAuthButtonHovered(true);
          }}
          onMouseLeave={function () {
            setAuthButtonHovered(false);
          }}
        >
          {location.pathname === "/auth" || authButtonHovered ? (
            <DoorEnterIconSelected />
          ) : (
            <DoorEnterIcon />
          )}
          <p
            className={`font-medium ${
              location.pathname === "/auth" ? "text-white" : ""
            }`}
          >
            Sign In
          </p>
        </Link>
      )}
    </div>
  );
}

Menu.Items = MenuItems;

export default Menu;
