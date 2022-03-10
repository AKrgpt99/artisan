import React, { useRef, useState } from "react";

import AddIcon from "../../assets/images/add_icon.svg";
import CloseIcon from "../../assets/images/close_icon.svg";

import Select from "../select";
import Switch from "../switch";
import TraitModal from "./TraitModal";
import Form from "../form";

function CreateToken() {
  const [fileURI, setFileURI] = useState();
  const [unlockables, setUnlockables] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [explicit, setExplicit] = useState(false);
  const [showTraitModal, setShowTraitModal] = useState(false);
  const [traits, setTraits] = useState([]);

  function handleFile(event) {
    setFileURI(URL.createObjectURL(event.target.files[0]));
  }

  function removeTrait(key) {
    return function () {
      setTraits(
        traits.filter(function (trait) {
          const [_key, _value] = trait.split(":");
          if (key !== _key) {
            return trait;
          }
        })
      );
    };
  }

  return (
    <div className="w-full h-fit">
      <div className="w-full px-5 lg:pl-12 pt-36 pb-6 bg-white">
        <h2>Create NFT</h2>
      </div>
      {showTraitModal && (
        <TraitModal
          onClose={function () {
            setShowTraitModal(false);
          }}
          onAdd={function (trait) {
            setTraits([trait, ...traits]);
          }}
        />
      )}
      <div className="w-full px-5 lg:pl-12 mt-8 flex flex-col justify-center items-start">
        <div className="w-full lg:w-[36rem] flex flex-col justify-center items-center">
          <Form.Group>
            <Form.Input.Upload value={fileURI} onChange={handleFile}>
              Upload NFT
            </Form.Input.Upload>
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label>Name</Form.Label>
            <Form.Input.Text
              value={name}
              onChange={function (event) {
                setName(event.target.value);
              }}
              placeholder="My Awesome Token"
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label>Description</Form.Label>
            <textarea
              className="w-full h-48 rounded-lg px-5 py-3 drop-shadow-md"
              placeholder="This token is awesome."
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label>Collection</Form.Label>
            <Form.Label.Description>
              Save to an existing collection. This is optional.
            </Form.Label.Description>
            <Form.Input.Select options={["Option 1", "Option 2", "Option 3"]} />
          </Form.Group>
          <Form.Group>
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-3/4 flex flex-col justify-start items-start gap-2.5">
                <Form.Label>Traits</Form.Label>
                <p className="text-sm">
                  Optionally, organize or label your NFTs with unique qualities.
                </p>
              </div>
              <button
                onClick={function () {
                  setShowTraitModal(true);
                }}
                className="w-12 h-12 bg-primary rounded-full flex justify-center items-center transition hover:bg-secondary1"
              >
                <img src={AddIcon} className="w-8 h-8" />
              </button>
            </div>
            {traits.length !== 0 && (
              <div className="w-full grid grid-cols-3 gap-2.5">
                {traits.map(function (trait) {
                  const [key, value] = trait.split(":");
                  return (
                    <div className="w-full py-2 flex flex-col justify-center items-center border-2 border-primary bg-primary/[0.125] rounded-lg relative">
                      <p className="w-full text-center text-xs">{key}</p>
                      <p className="w-full text-center font-bold">{value}</p>
                      <button
                        onClick={removeTrait(key)}
                        className="w-5 h-5 absolute top-1 right-1"
                      >
                        <img src={CloseIcon} className="w-5 h-5" alt="" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </Form.Group>
          <div className="w-full flex flex-col justify-center items-start mt-10 gap-2.5">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-3/4 flex flex-col justify-start items-start gap-2.5">
                <label className="font-medium ">Unlockables</label>
                <p className="text-sm">
                  Offer unlockables and utilities to your fans. Totally
                  optional.
                </p>
              </div>
              <Switch
                state={unlockables !== null ? "on" : "off"}
                onClick={function () {
                  if (unlockables !== null) setUnlockables(null);
                  else setUnlockables("");
                }}
              />
            </div>
            {unlockables !== null && (
              <textarea
                className="w-full h-48 rounded-lg px-5 py-3 drop-shadow-md"
                placeholder="Enter any content (keys, codes, links, etc.)"
              />
            )}
          </div>
          <div className="w-full flex flex-col justify-center items-start mt-10 gap-2.5">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-3/4 flex flex-col justify-start items-start gap-2.5">
                <label className="font-medium ">Explicit Content</label>
                <p className="text-sm">
                  Please set this item as explicit if it contains any sensitive
                  content.
                </p>
              </div>
              <Switch
                state={explicit ? "on" : "off"}
                onClick={function () {
                  setExplicit(!explicit);
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-start mt-10 gap-2.5">
            <label className="font-medium ">Supply</label>
            <p className="text-sm">
              The number of tokens that can be minted. No gas fees.
            </p>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-full h-11 px-5 rounded-lg drop-shadow-md z-10"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start mt-24">
            <button className="w-auto px-5 h-12 rounded-full bg-primary border-2 border-primary text-white transition hover:bg-secondary1 hover:border-secondary1">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateToken;
