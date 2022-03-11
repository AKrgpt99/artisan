import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CloseIcon } from "../../assets/images/close_icon.svg";

function CreateModal({ onClose }) {
  return (
    <div className="fixed p-5 w-screen h-screen top-0 left-0 bg-secondary1/50 flex justify-center items-center transition z-30">
      <div className="w-full lg:w-[34rem] h-fit bg-white rounded-xl transition flex flex-col justify-start items-start p-5">
        <div className="w-full flex flex-row justify-between items-center">
          <h3 className="text-primary ml-2 font-bold">Create</h3>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 flex flex-row justify-between items-center gap-5 px-2 mt-5">
          <Link
            to="/create/token"
            onClick={onClose}
            className="h-36 w-full border-2 border-primary rounded-xl flex flex-col justify-start items-start transition hover:bg-primary/25"
          >
            <div className="w-full p-5 text-left">
              <h6>NFT</h6>
            </div>
            <div className="w-full px-5 pb-5 text-left">
              <p className="font-light">Manually create an individual NFT.</p>
            </div>
          </Link>
          <Link
            to="/create/collection"
            onClick={onClose}
            className="h-36 w-full border-2 border-primary rounded-xl flex flex-col justify-start items-start transition hover:bg-primary/25"
          >
            <div className="w-full p-5 text-left">
              <h6>Collection</h6>
            </div>
            <div className="w-full px-5 pb-5 text-left">
              <p className="font-light">Group a particular set of NFTs.</p>
            </div>
          </Link>
        </div>
        <div className="w-full text-left px-2 pt-6">
          <p>
            There are no gas fees to create on Artisan, so you can make as many
            as you want.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
