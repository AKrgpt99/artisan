import React from "react";
import { Link } from "react-router-dom";

import CloseIcon from "../../assets/images/close_icon.svg";

function CreateModal({ onClose }) {
  return (
    <div className="fixed p-5 w-screen h-screen top-0 left-0 bg-secondary1/50 z-50 flex justify-center items-center transition">
      <div className="w-full lg:w-[34rem] h-fit lg:h-[22rem] bg-white rounded-xl transition flex flex-col justify-start items-start p-5">
        <div className="w-full flex flex-row justify-between items-center">
          <h3 className="text-primary ml-2">Create</h3>
          <button onClick={onClose}>
            <img src={CloseIcon} alt="close" />
          </button>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 flex flex-row justify-between items-center gap-7 px-2 mt-7">
          <Link
            to="/create/collection"
            className="h-40 w-full border-2 border-primary rounded-xl flex flex-col justify-start items-start transition hover:bg-primary/25"
          >
            <div className="w-full p-5 text-left">
              <h6>Collection</h6>
            </div>
            <div className="w-full px-5 pb-5 text-left">
              <p className="font-light">
                Create a group that would house a particular set of NFTs.
              </p>
            </div>
          </Link>
          <Link
            to="/create/token"
            className="h-40 w-full border-2 border-primary rounded-xl flex flex-col justify-start items-start transition hover:bg-primary/25"
          >
            <div className="w-full p-5 text-left">
              <h6>NFT</h6>
            </div>
            <div className="w-full px-5 pb-5 text-left">
              <p className="font-light">Manually create an individual NFT.</p>
            </div>
          </Link>
        </div>
        <div className="w-full text-left px-2 pt-5">
          <p>
            If you have a collection or NFT elsewhere, you can{" "}
            <a className="inline hover:underline text-primary" href="#">
              import
            </a>{" "}
            it instead.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
