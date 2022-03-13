import React from "react";

import Layout from "../layout";
import Carousel from "./carousel";

import "./Marketplace.css";

import GlobeIcon from "../../assets/images/globe-solid.svg";
import InstagramLogo from "../../assets/images/instagram-brands.svg";
import TwitterLogo from "../../assets/images/twitter-brands.svg";
import DiscordLogo from "../../assets/images/discord-brands.svg";

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
          <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="w-full h-80 bg-secondary3 rounded-xl shadow-xl"></div>
            <div className="w-full h-80 bg-secondary3 rounded-xl shadow-xl"></div>
            <div className="w-full h-80 bg-secondary3 rounded-xl shadow-xl"></div>
          </div>
        </div>
        <div className="w-full flex flex-col h-fit gap-8 mt-16">
          <div className="w-full">
            <h3 className="w-full font-bold text-left text-primary">
              Trending
            </h3>
          </div>
          <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full h-fit flex flex-col">
              <div className="w-full h-20 flex flex-row justify-between transition hover:rounded-lg hover:bg-secondary3/75 border-b-2 border-secondary3">
                <div className="flex flex-row">
                  <div className="w-20 h-full flex justify-center items-center">
                    <div className="w-12 h-12 bg-secondary1/25 rounded-full"></div>
                  </div>
                  <div className="flex flex-row justify-between items-center h-full w-fit py-3">
                    <div className="flex flex-col justify-center items-start">
                      <h6>Collection #1</h6>
                      <p className="caption">By User1</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end h-full py-3 pr-4">
                  <p className="text-xs">Floor Price</p>
                  <p className="font-bold">
                    <span className="text-green-600">(+86%)</span> 4 XTZ
                  </p>
                </div>
              </div>
              <div className="w-full h-20 flex flex-row justify-between transition hover:rounded-lg hover:bg-secondary3/75 border-b-2 border-secondary3">
                <div className="flex flex-row">
                  <div className="w-20 h-full flex justify-center items-center">
                    <div className="w-12 h-12 bg-secondary1/25 rounded-full"></div>
                  </div>
                  <div className="flex flex-row justify-between items-center h-full w-fit py-3">
                    <div className="flex flex-col justify-center items-start">
                      <h6>Collection #2</h6>
                      <p className="caption">By User1</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end h-full py-3 pr-4">
                  <p className="text-xs">Floor Price</p>
                  <p className="font-bold">
                    <span className="text-green-600">(+86%)</span> 4 XTZ
                  </p>
                </div>
              </div>
              <div className="w-full h-20 flex flex-row justify-between transition hover:rounded-lg hover:bg-secondary3/75 border-b-2 border-secondary3">
                <div className="flex flex-row">
                  <div className="w-20 h-full flex justify-center items-center">
                    <div className="w-12 h-12 bg-secondary1/25 rounded-full"></div>
                  </div>
                  <div className="flex flex-row justify-between items-center h-full w-fit py-3">
                    <div className="flex flex-col justify-center items-start">
                      <h6>Collection #3</h6>
                      <p className="caption">By User1</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end h-full py-3 pr-4">
                  <p className="text-xs">Floor Price</p>
                  <p className="font-bold">
                    <span className="text-green-600">(+86%)</span> 4 XTZ
                  </p>
                </div>
              </div>
              <div className="w-full h-20 flex flex-row justify-between transition hover:rounded-lg hover:bg-secondary3/75 border-b-2 border-secondary3">
                <div className="flex flex-row">
                  <div className="w-20 h-full flex justify-center items-center">
                    <div className="w-12 h-12 bg-secondary1/25 rounded-full"></div>
                  </div>
                  <div className="flex flex-row justify-between items-center h-full w-fit py-3">
                    <div className="flex flex-col justify-center items-start">
                      <h6>Collection #4</h6>
                      <p className="caption">By User1</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end h-full py-3 pr-4">
                  <p className="text-xs">Floor Price</p>
                  <p className="font-bold">
                    <span className="text-red-600">(-88%)</span> 4 XTZ
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col">
              <div className="w-full h-20 flex flex-row justify-between transition hover:rounded-lg hover:bg-secondary3/75 border-b-2 border-secondary3">
                <div className="flex flex-row">
                  <div className="w-20 h-full flex justify-center items-center">
                    <div className="w-12 h-12 bg-secondary1/25 rounded-full"></div>
                  </div>
                  <div className="flex flex-row justify-between items-center h-full w-fit py-3">
                    <div className="flex flex-col justify-center items-start">
                      <h6>Collection #5</h6>
                      <p className="caption">By User1</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end h-full py-3 pr-4">
                  <p className="text-xs">Floor Price</p>
                  <p className="font-bold">
                    <span className="text-red-600">(-66%)</span> 4 XTZ
                  </p>
                </div>
              </div>
              <div className="w-full h-20 flex flex-row justify-between transition hover:rounded-lg hover:bg-secondary3/75 border-b-2 border-secondary3">
                <div className="flex flex-row">
                  <div className="w-20 h-full flex justify-center items-center">
                    <div className="w-12 h-12 bg-secondary1/25 rounded-full"></div>
                  </div>
                  <div className="flex flex-row justify-between items-center h-full w-fit py-3">
                    <div className="flex flex-col justify-center items-start">
                      <h6>Collection #6</h6>
                      <p className="caption">By User1</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end h-full py-3 pr-4">
                  <p className="text-xs">Floor Price</p>
                  <p className="font-bold">
                    <span className="text-green-600">(+86%)</span> 4 XTZ
                  </p>
                </div>
              </div>
              <div className="w-full h-20 flex flex-row justify-between transition hover:rounded-lg hover:bg-secondary3/75 border-b-2 border-secondary3">
                <div className="flex flex-row">
                  <div className="w-20 h-full flex justify-center items-center">
                    <div className="w-12 h-12 bg-secondary1/25 rounded-full"></div>
                  </div>
                  <div className="flex flex-row justify-between items-center h-full w-fit py-3">
                    <div className="flex flex-col justify-center items-start">
                      <h6>Collection #7</h6>
                      <p className="caption">By User1</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end h-full py-3 pr-4">
                  <p className="text-xs">Floor Price</p>
                  <p className="font-bold">
                    <span className="text-red-600">(-86%)</span> 4 XTZ
                  </p>
                </div>
              </div>
              <div className="w-full h-20 flex flex-row justify-between transition hover:rounded-lg hover:bg-secondary3/75 border-b-2 border-secondary3">
                <div className="flex flex-row">
                  <div className="w-20 h-full flex justify-center items-center">
                    <div className="w-12 h-12 bg-secondary1/25 rounded-full"></div>
                  </div>
                  <div className="flex flex-row justify-between items-center h-full w-fit py-3">
                    <div className="flex flex-col justify-center items-start">
                      <h6>Collection #8</h6>
                      <p className="caption">By User1</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end h-full py-3 pr-4">
                  <p className="text-xs">Floor Price</p>
                  <p className="font-bold">
                    <span className="text-green-600">(+86%)</span> 4 XTZ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col h-fit gap-8 mt-16">
          <div className="w-full">
            <h3 className="font-bold text-left text-primary">Top Artists</h3>
          </div>
          <div className="w-full flex flex-row justify-start items-center gap-8">
            <div className="w-1/2 h-80 bg-secondary3/75 rounded-xl shadow-xl flex flex-col overflow-hidden">
              <div className="w-full h-1/3 bg-secondary1/25 flex justify-center items-center relative">
                <div className="w-32 h-32 rounded-full bg-secondary3 absolute -bottom-16 shadow-xl"></div>
              </div>
              <div className="w-full flex flex-col justify-center items-center mt-20 px-12">
                <h5>Artist Name</h5>
                <p className="w-full caption truncate">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="w-full flex flex-row justify-center items-center gap-4 mt-6">
                <img className="w-5 h-5" src={GlobeIcon} alt="website" />
                <img className="w-5 h-5" src={InstagramLogo} alt="instagram" />
                <img className="w-5 h-5" src={TwitterLogo} alt="twitter" />
                <img className="w-5 h-5" src={DiscordLogo} alt="discord" />
              </div>
            </div>
            <div className="w-1/2 h-80 bg-secondary3/75 rounded-xl shadow-xl flex flex-col overflow-hidden">
              <div className="w-full h-1/3 bg-secondary1/25 flex justify-center items-center relative">
                <div className="w-32 h-32 rounded-full bg-secondary3 absolute -bottom-16 shadow-xl"></div>
              </div>
              <div className="w-full flex flex-col justify-center items-center mt-20 px-12">
                <h5>Artist Name</h5>
                <p className="w-full caption truncate">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="w-full flex flex-row justify-center items-center gap-4 mt-6">
                <img className="w-5 h-5" src={GlobeIcon} alt="website" />
                <img className="w-5 h-5" src={InstagramLogo} alt="instagram" />
                <img className="w-5 h-5" src={TwitterLogo} alt="twitter" />
                <img className="w-5 h-5" src={DiscordLogo} alt="discord" />
              </div>
            </div>
          </div>
        </div>
      </Layout.Page.Container>
    </Layout.Page>
  );
}

export default Marketplace;
