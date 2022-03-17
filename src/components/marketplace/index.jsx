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
          <div className="w-full h-full bg-secondary3 p-5">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
              <div className="w-full h-full flex flex-col justify-center items-start gap-4 p-5">
                <h1 className="font-bold text-secondary1">
                  Find, collect, and sell unique NFTs
                </h1>
                <p>Canada's first loyalty platform and marketplace</p>
                <div className="flex flex-row gap-4">
                  <button className="font-semibold px-5 py-2 bg-primary border-2 border-primary text-white rounded-full transition hover:bg-secondary1 hover:border-secondary1">
                    Discover
                  </button>
                  <button className="font-semibold px-5 py-2 border-2 border-primary text-primary rounded-full transition hover:text-secondary1 hover:border-secondary1">
                    Create
                  </button>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center p-5">
                <button className="w-full h-full rounded-xl bg-secondary1/25 overflow-hidden relative flex flex-col justify-end items-center shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                    alt=""
                  />
                  <div className="w-full h-16 bg-secondary3 z-[1] flex flex-row justify-start items-center px-5">
                    <div className="flex flex-col">
                      <p className="font-semibold">Northern Lights</p>
                      <a
                        href="/"
                        className="font-medium text-primary text-xs hover:underline text-left"
                      >
                        abhinav
                      </a>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
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
                  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-secondary1/75 to-transparent z-[1]"></div>
                  <div className="w-full h-full absolute top-0 left-0 z-[0]">
                    <img
                      src={details.featureURI}
                      alt="featured image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 bg-secondary1/50 absolute top-5 right-5 rounded-full z-[2] overflow-hidden">
                    <img
                      src={details.logoURI}
                      alt="logo image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full flex flex-row absolute bottom-0 left-0 p-5 gap-4 z-[2]">
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
                      <div className="w-12 h-12 bg-secondary1/25 rounded-full overflow-hidden">
                        <img
                          src={details.logoURI}
                          alt="logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
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
                  className="w-full h-56 rounded-xl bg-secondary3 shadow-lg flex flex-col justify-end overflow-hidden relative"
                >
                  <div className="h-full w-full absolute top-0 left-0 bg-secondary1/25 z-[0]">
                    <img
                      src={data.categories[category.value].bgURI}
                      alt="category"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-16 bg-secondary3 flex justify-center items-center z-[1]">
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
      <Layout.Page.Footer />
    </Layout.Page>
  );
}

export default Marketplace;
