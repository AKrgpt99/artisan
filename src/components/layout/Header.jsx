import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as ChainsLogo } from "../../assets/images/Artisan_Chains.svg";
import { ReactComponent as AlarmIcon } from "../../assets/images/alarm_icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search_icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/menu_icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close_icon.svg";

import CreateModal from "./CreateModal";

function Header({ onClick, showMenu }) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const user = useSelector(function (state) {
    return state.users.currentUser;
  });
  const navigate = useNavigate();

  return (
    <>
      {showCreateModal && (
        <CreateModal
          onClose={function () {
            setShowCreateModal(false);
          }}
        />
      )}
      <header className="w-full h-32 flex flex-row justify-between items-center px-5 lg:pl-72 lg:pr-5 fixed top-0 left-0 bg-white z-20 lg:z-10">
        <Link
          to="/"
          className="h-32 flex lg:hidden flex-row justify-center items-center gap-4"
        >
          <ChainsLogo width="48px" />
          <h2 className="font-bold text-primary">ARTISAN</h2>
        </Link>
        <div className="relative hidden lg:flex items-center w-1/2 mr-9">
          <SearchIcon className="absolute left-4" />
          <input
            type="text"
            placeholder="Search NFTs, collections, and users"
            className="rounded-full w-full lg:w-100 h-12 px-14 border-2 border-secondary3 transition hover:border-primary"
          />
        </div>
        <div className="flex flex-row items-center gap-5 lg:gap-9">
          <button
            onClick={function () {
              setShowCreateModal(true);
            }}
            className="hidden lg:flex justify-center items-center font-semibold px-6 h-10 rounded-full text-white border-2 border-primary hover:border-black transition hover:bg-black bg-primary"
          >
            Create
          </button>
          <button className="rounded-full w-10 h-10 flex flex-row justify-center items-center border-2 border-secondary3 transition hover:border-primary">
            <AlarmIcon />
          </button>
          <button
            onClick={onClick}
            className="rounded-full w-10 h-10 lg:hidden flex flex-row justify-center items-center"
          >
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
          <button
            onClick={function () {
              navigate("/auth");
            }}
            className="rounded-full w-fit h-10 hidden lg:flex flex-row justify-center items-center px-0.5 py-1 border-2 border-secondary3 transition hover:border-primary"
          >
            <div className="rounded-full w-8 h-8 bg-primary"></div>
            <p className="font-medium mx-5 w-fit text-center">
              {user ? user.username : "Sign in"}
            </p>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
