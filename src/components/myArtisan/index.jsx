import React, { useState } from "react";

import Section from "./Section";
import Tile from "./Tile";

import { ReactComponent as PhoneNumberIcon } from "../../assets/images/phone_number_icon.svg";
import { ReactComponent as ListIcon } from "../../assets/images/list_icon.svg";
import NFT1 from "../../assets/images/nft1.png";
import NFT2 from "../../assets/images/nft2.png";

function MyArtisan() {
  const [display, setDisplay] = useState("grid");

  return (
    <div className="w-full h-fit">
      <div className="w-full px-5 lg:pl-12 pt-36 pb-6 bg-white">
        <h2>MyArtisan</h2>
      </div>
      <div className="w-full px-5 lg:pl-12 mt-8 flex flex-col justify-center items-start">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center gap-5">
            <button className="font-semibold px-6 py-2 rounded-full text-white transition hover:bg-black bg-primary">
              Create
            </button>
            <button className="font-semibold px-6 py-2 rounded-full text-primary border-2 border-primary transition hover:bg-black hover:border-black hover:text-white">
              Import
            </button>
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <button
              className={`w-7 h-7 flex justify-center items-center rounded-md ${
                display === "grid" && "bg-white"
              }`}
              onClick={function () {
                setDisplay("grid");
              }}
            >
              <PhoneNumberIcon />
            </button>
            <button
              className={`w-7 h-7 flex justify-center items-center rounded-md ${
                display === "list" && "bg-white"
              }`}
              onClick={function () {
                setDisplay("list");
              }}
            >
              <ListIcon />
            </button>
          </div>
        </div>
        <Section title={`Collections (${1})`} display={display}>
          <Tile.Collection
            img={
              <img
                src={NFT1}
                className="object-cover w-full h-full rounded-xl"
              />
            }
            title="Collection Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
            numNFTs={1}
            display={display}
          />
        </Section>
        <Section title={`NFTs (${1})`} className="mt-6" display={display}>
          <Tile.NFT
            img={
              <img
                src={NFT2}
                className="object-cover w-full h-full rounded-xl"
              />
            }
            title="NFT Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price={0.01}
            royalty={5}
            numUnlockables={1}
            numUtilities={1}
            isFreePromotion
            display={display}
          />
        </Section>
      </div>
    </div>
  );
}

export default MyArtisan;
