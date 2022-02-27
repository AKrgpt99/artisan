import React from "react";

function Tile({
  img,
  title,
  description,
  children,
  isFreePromotion,
  display,
  isLargeListItem,
}) {
  return (
    <>
      {display === "grid" ? (
        <button className="bg-white h-auto rounded-xl flex flex-col justify-start items-center p-5 relative z-0">
          <div className="w-full h-fit flex justify-center items-center">
            {img}
            {isFreePromotion && (
              <div className="absolute top-10 left-0 w-32 h-7 flex justify-center items-center bg-secondary2">
                <p className="tag">Promoted Free</p>
              </div>
            )}
          </div>
          <div className="w-full flex flex-col justify-center items-center pt-7 pb-2 gap-2">
            <h6 className="w-full text-left text-primary">{title}</h6>
            <p className="w-full text-left">{description}</p>
          </div>
          <hr className="w-full mt-2 text-secondary3" />
          {children}
          {isFreePromotion && (
            <div className="w-full flex flex-row justify-center items-center pt-5">
              <button className="w-56 h-9 flex justify-center items-center font-semibold rounded-full border-2 border-secondary2 hover:bg-black hover:border-black hover:text-white">
                Upgrade Promotion
              </button>
            </div>
          )}
        </button>
      ) : (
        <button className="w-full rounded-xl bg-white flex flex-col p-5 relative z-0">
          <div className="w-full flex flex-row justify-start items-center gap-3.5">
            <div
              className={`${
                isLargeListItem ? "w-28 h-28" : "w-16 h-16"
              } flex justify-center items-center`}
            >
              {img}
              {isFreePromotion && (
                <div className="absolute top-10 left-0 w-32 h-7 flex justify-center items-center bg-secondary2">
                  <p className="tag">Promoted Free</p>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col justify-between items-start ${
                isLargeListItem ? "h-28 w-52 lg:w-56" : "h-16"
              }`}
            >
              <h6 className="text-primary">{title}</h6>
              <div className="flex flex-col justify-start items-start w-full">
                {children}
              </div>
            </div>
          </div>
          {isFreePromotion && (
            <div className="w-full flex flex-row justify-center items-center pt-5">
              <button className="w-56 h-9 flex justify-center items-center font-semibold rounded-full border-2 border-secondary2 hover:border-black hover:bg-black hover:text-white">
                Upgrade Promotion
              </button>
            </div>
          )}
        </button>
      )}
    </>
  );
}

Tile.Collection = function ({
  img,
  title,
  description,
  numNFTs,
  isFreePromotion,
  display,
}) {
  return (
    <Tile
      img={img}
      title={title}
      description={description}
      isFreePromotion={isFreePromotion}
      display={display}
    >
      <div className="w-full text-left mt-5 flex flex-row justify-start items-center gap-4">
        <p className="tag">Contains: </p>
        <p className="caption">
          {numNFTs} NFT{numNFTs > 1 && "s"}
        </p>
      </div>
    </Tile>
  );
};

Tile.NFT = function ({
  img,
  title,
  description,
  price,
  royalty,
  numUnlockables,
  numUtilities,
  isFreePromotion,
  display,
}) {
  return (
    <Tile
      img={img}
      title={title}
      description={description}
      isFreePromotion={isFreePromotion}
      display={display}
      isLargeListItem={display === "list" ? true : false}
    >
      <div className="w-full text-left mt-5 flex flex-row justify-between items-center">
        <p className="tag">Price: </p>
        <p className="caption">{price} ETH</p>
      </div>
      <div className="w-full text-left mt-1 flex flex-row justify-between items-center">
        <p className="tag">Royalty: </p>
        <p className="caption">{royalty}%</p>
      </div>
      {display === "grid" && (
        <>
          <div className="w-full text-left mt-1 flex flex-row justify-between items-center">
            <p className="tag">Unlockables: </p>
            <p className="caption">{numUnlockables}</p>
          </div>
          <div className="w-full text-left mt-1 flex flex-row justify-between items-center">
            <p className="tag">Utilities: </p>
            <p className="caption">{numUtilities}</p>
          </div>
        </>
      )}
    </Tile>
  );
};

export default Tile;
