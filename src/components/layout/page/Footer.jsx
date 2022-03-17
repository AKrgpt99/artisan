import React from "react";

import { ReactComponent as GlobeIcon } from "../../../assets/images/globe-solid.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/images/instagram-brands.svg";
import { ReactComponent as TwitterLogo } from "../../../assets/images/twitter-brands.svg";
import { ReactComponent as DiscordLogo } from "../../../assets/images/discord-brands.svg";
import { ReactComponent as ChainsLogo } from "../../../assets/images/Artisan_Chains.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full p-12 gap-12 flex flex-col">
      <hr />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        <div className="w-full flex flex-col text-left gap-4">
          <div className="w-full">
            <h6 className="font-semibold">Join Our Newsletter!</h6>
          </div>
          <div className="w-full">
            <p className="">
              Don't miss out on featured, trending, and top collections. Sign up
              for our newsletter to be up-to-date.
            </p>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full rounded-lg h-11 px-5 drop-shadow-lg"
            />
          </div>
        </div>
        <div className="w-full flex flex-col text-left gap-4">
          <div className="w-full text-left lg:text-right">
            <h6 className="font-semibold">Check out the Community!</h6>
          </div>
          <div className="w-full flex flex-row justify-start lg:justify-end items-center gap-4">
            <button className="w-12 h-12 rounded-full border-2 border-[#00000080] flex justify-center items-center">
              <GlobeIcon className="w-6 h-6 opacity-50" />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-[#00000080] flex justify-center items-center">
              <DiscordLogo className="w-6 h-6 opacity-50" />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-[#00000080] flex justify-center items-center">
              <InstagramLogo className="w-6 h-6 opacity-50" />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-[#00000080] flex justify-center items-center">
              <TwitterLogo className="w-6 h-6 opacity-50" />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-[28%] flex flex-col justify-start items-start gap-2">
          <ChainsLogo width="64px" height="64px" />
          <h2 className="font-bold text-primary">ARTISAN</h2>
          <p className="w-full font-medium text-sm">
            Toronto's first loyalty platform for local and emerging artists
            where users can earn rewards in crypto for supporting artists.
          </p>
        </div>
        <div className="w-full lg:w-[72%] mt-12 lg:mt-0 grid grid-cols-2 lg:grid-cols-4 lg:px-8 lg:gap-8">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <p className="font-semibold">Marketplace</p>
            <div className="flex flex-col gap-1">
              <Link to="/search?category=all">All Categories</Link>
              <Link to="/search?category=art">Art</Link>
              <Link to="/search?category=art">Collectibles</Link>
              <Link to="/search?category=art">Music</Link>
              <Link to="/search?category=art">Photography</Link>
              <Link to="/search?category=art">Animation</Link>
              <Link to="/search?category=art">Sports</Link>
              <Link to="/search?category=art">Utility</Link>
              <Link to="/search?category=art">Trading Cards</Link>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <p className="font-semibold">Account</p>
              <div className="flex flex-col gap-1">
                <Link to="/profile">Profile</Link>
                <Link to="/artisan">MyArtisan</Link>
                <Link to="/rewards">Rewards</Link>
                <Link to="/promotions">Promotions </Link>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-4 mt-4">
                <p className="font-semibold">Create</p>
                <div className="w-full flex flex-col gap-1">
                  <Link to="/create/token">Token</Link>
                  <Link to="/create/collection">Collection</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-4 mt-8 lg:mt-0">
            <p className="font-semibold">Resources</p>
            <div className="flex flex-col gap-1">
              <a href="https://artisancoin.io/help">Help Page</a>
              <a href="https://artisancoin.io/blog">Blog</a>
              <a href="https://artisancoin.io/blog">Newsletter</a>
              <a href="https://artisancoin.io/magazine">Magazine</a>
              <a href="https://artisancoin.io/agency">Agency</a>
              <a href="https://artisancoin.io/agencyform">Apply (Artists)</a>
              <a href="https://discord.com/invite/3XGdSuDNnB?utm_source=everywhere&utm_medium=invite&utm_campaign=discord">
                Community
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-4 mt-4 lg:mt-0">
            <p className="font-semibold">Company</p>
            <div className="flex flex-col gap-1">
              <a href="https://artisancoin.io/">About</a>
              <a href="https://artisancoin.io/">Roadmap</a>
              <a href="https://artisancoin.io/">Whitepaper</a>
              <a href="https://artisancoin.io/">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <p className="caption">&copy; 2022 Artisan NFT</p>
        <a className="caption" href="https://artisancoin.io/privacypolicy/">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Footer;
