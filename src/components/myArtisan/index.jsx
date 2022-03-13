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
            imgSrc={NFT2}
            title="NFT Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
            isFreePromotion
            likes={32}
            views={76}
          />
        </Section>
        <Section title={`Collections (${1})`} className="mt-16">
          <Tile.Collection
            logoImgSrc={NFT1}
            imgSrc={NFT2}
            title="Collection Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
            numNFTs={1}
            likes={32}
            views={76}
          />
        </Section>
      </Layout.Page.Container>
    </Layout.Page>
  );
}

export default MyArtisan;
