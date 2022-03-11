import React from "react";

import Section from "./Section";
import Tile from "./Tile";

import NFT1 from "../../assets/images/nft1.png";
import NFT2 from "../../assets/images/nft2.png";
import Layout from "../layout";

function MyArtisan() {
  return (
    <Layout.Page>
      <Layout.Page.Header>MyArtisan</Layout.Page.Header>
      <Layout.Page.Container>
        <Section>
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
            isFreePromotion
            likes={32}
            views={76}
          />
        </Section>
        <Section title={`Collections (${1})`} className="mt-16">
          {/* <Tile.Collection
            logoImg={
              <img
                src={NFT1}
                className="object-cover w-24 h-24 lg:w-16 lg:h-16 rounded-full absolute top-[11rem] lg:top-[9rem] z-20"
              />
            }
            img={
              <img
                src={NFT2}
                className="object-contain w-full h-52 lg:h-36 rounded-xl"
              />
            }
            title="Collection Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
            numNFTs={1}
            likes={32}
            views={76}
          /> */}
        </Section>
      </Layout.Page.Container>
    </Layout.Page>
  );
}

export default MyArtisan;
