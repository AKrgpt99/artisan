import React from "react";

import HeartIcon from "../../assets/images/heart1.svg";
import VisibleIcon from "../../assets/images/visible.svg";

function Tile({
  imgSrc,
  logoImgSrc,
  title,
  description,
  children,
  isFreePromotion,
  views,
  likes,
}) {
  return (
    <button className="bg-white h-auto rounded-xl flex flex-col justify-start items-center pb-5 relative z-0 shadow-xl">
      <div className="h-8 w-full bg-secondary1/[0.125] rounded-t-xl px-5 flex flex-row justify-end items-center gap-4">
        <div className="flex flex-row items-center gap-1">
          <img src={HeartIcon} alt="likes" className="w-5 h-5" />
          <p className="text-xs font-bold text-secondary1/50">{likes}</p>
        </div>
        <div className="flex flex-row items-center gap-1">
          <img src={VisibleIcon} alt="views" className="w-5 h-5" />
          <p className="text-xs font-bold text-secondary1/50">{views}</p>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center items-center">
        {imgSrc && (
          <img
            src={imgSrc}
            className="object-contain w-full h-52 lg:h-36 rounded-b-xl"
          />
        )}
        {logoImgSrc && (
          <img
            src={logoImgSrc}
            className="object-cover w-24 h-24 lg:w-16 lg:h-16 rounded-full absolute top-[11rem] lg:top-[9rem] z-20"
          />
        )}
        {isFreePromotion && (
          <div className="absolute top-16 left-0 w-32 h-7 flex justify-center items-center bg-secondary2">
            <p className="tag">Promoted Free</p>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-4 pb-2 px-5">
        <h6 className="w-full text-center text-primary font-bold mt-3">
          {title}
        </h6>
        <p className="w-full text-center text-secondary1/50 text-medium">
          by{" "}
          <a
            className="inline text-primary transition hover:text-black"
            href="/profile"
          >
            You
          </a>
        </p>
        <p className="w-3/4 text-center truncate mt-3">{description}</p>
      </div>
      <hr className="w-full mt-2 text-secondary3 px-5" />
      {children}
      {isFreePromotion && (
        <div className="w-full flex flex-row justify-center items-center pt-5 px-5">
          <button className="w-56 h-9 flex justify-center items-center font-semibold rounded-full border-2 border-secondary2 hover:bg-black hover:border-black hover:text-white">
            Upgrade Promotion
          </button>
        </div>
      )}
    </button>
  );
}

Tile.Collection = function ({
  imgSrc,
  logoImgSrc,
  title,
  description,
  numNFTs,
  likes,
  views,
}) {
  return (
    <Tile
      imgSrc={imgSrc}
      logoImgSrc={logoImgSrc}
      title={title}
      description={description}
      likes={likes}
      views={views}
    >
      <div className="w-full text-center mt-5 flex flex-row justify-center items-center gap-4">
        <p className="caption">
          {numNFTs} Item{numNFTs > 1 && "s"}
        </p>
      </div>
    </Tile>
  );
};

Tile.NFT = function ({
  imgSrc,
  logoImgSrc,
  title,
  description,
  isFreePromotion,
  likes,
  views,
}) {
  return (
    <Tile
      imgSrc={imgSrc}
      logoImgSrc={logoImgSrc}
      title={title}
      description={description}
      isFreePromotion={isFreePromotion}
      likes={likes}
      views={views}
    ></Tile>
  );
};

export default Tile;
