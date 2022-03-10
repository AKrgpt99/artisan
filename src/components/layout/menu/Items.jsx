import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useSelector } from "react-redux";

import { ReactComponent as DoorExitIcon } from "../../../assets/images/door_exit_icon.svg";
import { ReactComponent as DoorExitIconSelected } from "../../../assets/images/door_exit_icon--selected.svg";
import { ReactComponent as DoorEnterIcon } from "../../../assets/images/door_enter_icon.svg";
import { ReactComponent as DoorEnterIconSelected } from "../../../assets/images/door_enter_icon--selected.svg";

function MenuItems({ children }) {
  const [icon, setIcon] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(function (state) {
    return state.users.currentUser;
  });

  useEffect(
    function () {
      if (user) {
        setIcon(<DoorExitIcon />);
        setSelectedIcon(<DoorExitIconSelected />);
      } else {
        setIcon(<DoorEnterIcon />);
        setSelectedIcon(<DoorEnterIconSelected />);
      }
    },
    [user]
  );

  function handleClick() {
    if (user) {
      Auth.signOut();
    } else {
      navigate("/auth");
    }
  }

  return (
    <div className="flex flex-col w-full h-full mt-6 gap-4">
      {children}
      <button
        onClick={handleClick}
        className={`w-full h-12 flex flex-row justify-start items-center gap-9 px-7 transition hover:bg-secondary1 hover:text-white ${
          location.pathname === "/auth" ? "bg-primary text-white" : "bg-white"
        }`}
      >
        {location.pathname === "/auth" ? selectedIcon : icon}
        <p className="font-medium">Sign {user ? "out" : "in"}</p>
      </button>
    </div>
  );
}

export default MenuItems;
