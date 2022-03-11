import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as ChainsLogo } from "../../../assets/images/Artisan_Chains.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/search_icon.svg";

import MenuItem from "./Item";
import MenuItems from "./Items";

import "./Menu.css";

function Menu({ show, children, expanded }) {
  return (
    <>
      {/* Desktop */}
      <CSSTransition classNames="menu" in={expanded} timeout={250}>
        <div
          className={`h-screen hidden lg:flex flex-col justify-start items-start fixed top-0 left-0 z-20 bg-white border-r-2 border-secondary3 transition`}
        >
          <Link
            to="/"
            className="h-12 flex flex-row justify-center items-center gap-4 mx-5 my-9"
          >
            <ChainsLogo width="48px" />
            <CSSTransition
              in={expanded}
              classNames="logo"
              timeout={150}
              unmountOnExit
            >
              <h2 className="font-bold text-primary transition">ARTISAN</h2>
            </CSSTransition>
          </Link>
          {children}
        </div>
      </CSSTransition>
      {/* End Desktop */}
      {/* Mobile */}
      <CSSTransition
        in={show}
        classNames="mobile-menu"
        timeout={250}
        unmountOnExit
      >
        <div className="h-screen w-full flex lg:hidden flex-col justify-start items-start fixed top-0 left-0 z-20 bg-transparent pt-32">
          <div className="w-full px-4 flex flex-row justify-between items-center pb-4 bg-white">
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
      </CSSTransition>
      {/* End Mobile */}
    </>
  );
}

Menu.Item = MenuItem;

Menu.Items = MenuItems;

export default Menu;
