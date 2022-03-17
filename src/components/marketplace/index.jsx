import React from "react";

import Layout from "../layout";
import Carousel from "./carousel";
import ListView from "./list-view";
import { CATEGORIES } from "../../utils";

import "./Marketplace.css";

import { ReactComponent as GlobeIcon } from "../../assets/images/globe-solid.svg";
import { ReactComponent as InstagramLogo } from "../../assets/images/instagram-brands.svg";
import { ReactComponent as TwitterLogo } from "../../assets/images/twitter-brands.svg";
import { ReactComponent as DiscordLogo } from "../../assets/images/discord-brands.svg";

import data from "./mock-data";

function Marketplace() {
  return (
    <Layout.Page>
      <Layout.Page.Header>Marketplace</Layout.Page.Header>
      <Layout.Page.Container>
        <Carousel>
          <div className="w-full h-full bg-red-900"></div>
          <div className="w-full h-full bg-cyan-900"></div>
          <div className="w-full h-full bg-blue-900"></div>
          <div className="w-full h-full bg-green-900"></div>
          <div className="w-full h-full bg-purple-900"></div>
        </Carousel>
        <div className="w-full flex flex-col h-fit gap-8 mt-16">
          <div className="w-full">
            <h3 className="font-bold text-left text-primary">
              Featured Collections
            </h3>
          </div>
          <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.featured.map(function (details, i) {
              return (
                <button
                  key={i}
                  className="w-full h-96 bg-secondary3 rounded-xl shadow-xl relative overflow-hidden"
                >
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-secondary1/50 to-transparent"></div>
                  <div className="w-12 h-12 bg-secondary1/50 absolute top-5 right-5 rounded-full"></div>
                  <div className="w-full flex flex-row absolute bottom-0 left-0 p-5 gap-4">
                    <div className="w-full flex flex-col justify-center items-start text-white gap-2 text-left">
                      <h6>{details.name}</h6>
                      <p className="w-full h-fit caption font-bold text-ellipsis">
                        {details.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col h-fit gap-8 mt-16">
          <div className="w-full">
            <h3 className="w-full font-bold text-left text-primary">
              Trending
            </h3>
          </div>
          <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
            {data.trending.map(function (details, i) {
              return (
                <button
                  key={i}
                  className="w-full h-20 flex flex-row justify-between transition hover:rounded-lg hover:bg-secondary3/75 border-b-2 border-secondary3"
                >
                  <div className="flex flex-row h-full text-left">
                    <div className="h-full flex items-center font-bold pl-4 text-sm md:text-base">
                      {i + 1}
                    </div>
                    <div className="w-20 h-full flex justify-center items-center">
                      <div className="w-12 h-12 bg-secondary1/25 rounded-full"></div>
                    </div>
                    <div className="flex flex-row justify-between items-center h-full w-fit py-3">
                      <div className="flex flex-col justify-center items-start">
                        <h6 className="text-sm md:text-base font-semibold">
                          {details.name}
                        </h6>
                        <p className="caption">By {details.creator.username}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-end h-full py-3 pr-4">
                    <p className="text-xs text-secondary1/50">Floor Price</p>
                    <p className="font-bold text-right text-sm md:text-base">
                      <span
                        className={
                          details.pctPriceChange >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        ({details.pctPriceChange >= 0 && "+"}
                        {Number.parseInt(details.pctPriceChange * 100)}%)
                      </span>{" "}
                      {details.floorPrice} XTZ
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col h-fit gap-8 mt-16">
          <div className="w-full">
            <h3 className="font-bold text-left text-primary">Top Artists</h3>
          </div>
          <ListView>
            {data.topArtists.map(function (details, i) {
              return (
                <div
                  key={i}
                  className="w-full h-full bg-secondary3/75 rounded-xl flex flex-col overflow-hidden"
                >
                  <div className="w-full h-1/3 bg-secondary1/25 flex justify-center items-center relative">
                    <div className="w-32 h-32 rounded-full bg-secondary3 absolute -bottom-16 shadow-xl overflow-hidden flex justify-center items-center">
                      <img
                        src={details.profileURI}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between items-center px-12 pt-3">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-semibold">
                        {details.createdCollectionsLength}
                      </p>
                      <p className="caption font-bold">Collections</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-semibold">
                        {details.createdTokensLength}
                      </p>
                      <p className="caption font-bold">NFTs</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center mt-10 px-12">
                    <h5>{details.username}</h5>
                    <p className="w-full caption truncate">{details.bio}</p>
                  </div>
                  <div className="w-full flex flex-row justify-center items-center gap-4 mt-6">
                    {details.externals.map(function (link, i) {
                      if (link.includes("instagram"))
                        return (
                          <a href={link} key={i}>
                            <InstagramLogo className="w-5 h-5 opacity-50" />
                          </a>
                        );
                      else if (link.includes("twitter"))
                        return (
                          <a href={link} key={i}>
                            <TwitterLogo className="w-5 h-5 opacity-50" />
                          </a>
                        );
                      else if (link.includes("discord"))
                        return (
                          <a href={link} key={i}>
                            <DiscordLogo className="w-5 h-5 opacity-50" />
                          </a>
                        );
                      return (
                        <a href={link} key={i}>
                          <GlobeIcon className="w-5 h-5 opacity-50" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </ListView>
        </div>
        <div className="w-full flex flex-col h-fit gap-8 mt-16">
          <div className="w-full">
            <h3 className="font-bold text-left text-primary">Categories</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {CATEGORIES.map(function (category, i) {
              return (
                <button
                  key={i}
                  className="w-full h-56 rounded-xl bg-secondary3 shadow-lg flex flex-col overflow-hidden"
                >
                  <div className="h-40 w-full bg-secondary1/25"></div>
                  <div className="w-full h-16 flex justify-center items-center">
                    <p className="font-semibold text-secondary1/50">
                      {category.value}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Layout.Page.Container>
    </Layout.Page>
  );
}

export default Marketplace;
