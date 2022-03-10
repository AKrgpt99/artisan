import React, { useState } from "react";

import CloseIcon from "../../assets/images/close_icon.svg";

function TraitModal({ onClose, onAdd }) {
  const [selected, setSelected] = useState("quality");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  function handleClick() {
    if (selected === "quality") {
      onAdd(`${type}:${name}`);
    } else {
      onAdd(`${name}:${value}`);
    }
    onClose();
  }

  return (
    <div className="fixed p-5 w-screen h-screen top-0 left-0 bg-secondary1/50 z-50 flex justify-center items-center transition">
      <div className="w-full lg:w-[34rem] h-fit bg-white rounded-xl transition flex flex-col justify-start items-start p-5">
        <div className="w-full flex flex-row justify-between items-center">
          <h3 className="text-primary ml-2">Add Trait</h3>
          <button onClick={onClose}>
            <img src={CloseIcon} alt="close" />
          </button>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 flex flex-row justify-between items-center gap-7 px-2 mt-7">
          <button
            onClick={function () {
              setSelected("quality");
            }}
            className={`h-40 w-full border-2 border-primary rounded-xl flex flex-col justify-start items-start transition hover:bg-primary/25 ${
              selected === "quality" && "bg-primary/25"
            }`}
          >
            <div className="w-full p-5 text-left">
              <h6>Quality</h6>
            </div>
            <div className="w-full px-5 pb-5 text-left">
              <p className="font-light">
                Add a textual trait that defines a quality about this NFT.
              </p>
            </div>
          </button>
          <button
            onClick={function () {
              setSelected("quantity");
            }}
            className={`h-40 w-full border-2 border-primary rounded-xl flex flex-col justify-start items-start transition hover:bg-primary/25 ${
              selected === "quantity" && "bg-primary/25"
            }`}
          >
            <div className="w-full p-5 text-left">
              <h6>Quantity</h6>
            </div>
            <div className="w-full px-5 pb-5 text-left">
              <p className="font-light">
                Add a numerical trait like rating or level.
              </p>
            </div>
          </button>
        </div>
        {selected === "quality" ? (
          <div className="w-full flex flex-col px-2">
            <div className="w-full flex flex-col justify-center items-start mt-10 gap-2.5">
              <label className="font-medium">Type</label>
              <p className="text-sm">A label for this trait.</p>
              <input
                className="w-full h-11 rounded-lg px-5 drop-shadow-md"
                type="text"
                placeholder="Size"
                value={type}
                onChange={function (event) {
                  setType(event.target.value);
                }}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start mt-6 gap-2.5">
              <label className="font-medium ">Name</label>
              <p className="text-sm">What the trait will be called.</p>
              <input
                className="w-full h-11 rounded-lg px-5 drop-shadow-md"
                type="text"
                placeholder="Small"
                defaultValue={""}
                value={name}
                onChange={function (event) {
                  setName(event.target.value);
                }}
              />
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col px-2">
            <div className="w-full flex flex-col justify-center items-start mt-10 gap-2.5">
              <label className="font-medium ">Name</label>
              <p className="text-sm">What the trait will be called.</p>
              <input
                className="w-full h-11 rounded-lg px-5 drop-shadow-md"
                type="text"
                placeholder="Beats per minute"
                value={name}
                onChange={function (event) {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start mt-6 gap-2.5">
              <label className="font-medium ">Value</label>
              <p className="text-sm">Define a number for this trait.</p>
              <input
                className="w-full h-11 rounded-lg px-5 drop-shadow-md"
                type="number"
                defaultValue={0}
                value={value}
                onChange={function (event) {
                  setValue(event.target.value);
                }}
              />
            </div>
          </div>
        )}
        <div className="w-full flex flex-row px-2 justify-end mt-7">
          <button
            onClick={handleClick}
            className="px-5 h-9 flex justify-center items-center bg-primary rounded-full text-white transition hover:bg-secondary1"
          >
            Add Trait
          </button>
        </div>
      </div>
    </div>
  );
}

export default TraitModal;
