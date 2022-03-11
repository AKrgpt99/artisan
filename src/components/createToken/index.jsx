import React, { useState } from "react";

import AddIcon from "../../assets/images/add_icon.svg";
import TezosLogo from "../../assets/images/XTZ_2011.svg";

import TraitModal from "./TraitModal";
import Form from "../form";
import TraitList from "./TraitList";
import Layout from "../layout";
import { websiteIsValid } from "../../utils";

const COLLECTIONS = [
  // { value: "Victoria's Low Self-Esteem" },
  // { value: "Masturbation in the City 2" },
  // { value: "Die Soft" },
  // { value: "Dicktator" },
  // { value: "Master of Come" },
];

function CreateToken() {
  const [fileURI, setFileURI] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [external, setExternal] = useState("");
  const [unlockable, setUnlockable] = useState(null);
  const [explicit, setExplicit] = useState(false);
  const [showTraitModal, setShowTraitModal] = useState(false);
  const [traits, setTraits] = useState([]);
  const [supply, setSupply] = useState(1);
  const [collection, setCollection] = useState("");
  const [showCollections, setShowCollections] = useState(false);
  const [errors, setErrors] = useState({});

  const filteredCollections = COLLECTIONS.filter(function ({ value }) {
    if (value.toLowerCase().includes(collection.toLowerCase())) {
      return value;
    }
  });

  function handleSubmit() {
    // TODO: validation
    let tempErrors = {};

    if (fileURI === "") {
      tempErrors.fileURI = "Content is required.";
    }

    if (name === "") {
      tempErrors.name = "Cannot be empty.";
    }

    if (description === "") {
      tempErrors.description = "Cannot be empty.";
    }

    if (external !== "" && !websiteIsValid(external)) {
      tempErrors.external = "Not formatted properly.";
    }

    if (!Number.isInteger(supply)) {
      tempErrors.supply = "Must be a whole number.";
    } else if (supply < 1) {
      tempErrors.supply = "Must be atleast 1.";
    }

    if (tempErrors !== {}) {
      setErrors(tempErrors);
      window.scrollTo(0, 0);
    }
    // TODO: api
  }

  return (
    <Layout.Page>
      <Layout.Page.Header>Create NFT</Layout.Page.Header>
      <Layout.Page.Container>
        <div className="w-full lg:w-[36rem] flex flex-col justify-center items-center">
          <Form.Group>
            <Form.Label error={errors.fileURI}>
              Upload an Image, Video, Audio, or 3D model
            </Form.Label>
            <Form.Label.Description>
              Accepted formats: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
              GLB, GLTF
            </Form.Label.Description>
            <Form.Input.Upload
              value={fileURI}
              onChange={function (event) {
                setFileURI(URL.createObjectURL(event.target.files[0]));
                setErrors({ ...errors, fileURI: null });
              }}
              variation="feature"
              accept="image/*,audio/*,video/*,.glb,.gltf"
              error={errors.fileURI}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label error={errors.name}>Name</Form.Label>
            <Form.Input.Text
              value={name}
              onChange={function (event) {
                setName(event.target.value);
                setErrors({ ...errors, name: null });
              }}
              placeholder="My Awesome Token"
              error={errors.name}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label error={errors.description}>Description</Form.Label>
            <Form.Input.TextArea
              value={description}
              onChange={function (event) {
                setDescription(event.target.value);
                setErrors({ ...errors, description: null });
              }}
              placeholder="This token is great."
              error={errors.description}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label error={errors.external}>External Link</Form.Label>
            <Form.Label.Description>
              A link to a page that gives information about the token or you,
              and will be displayed on it's detail page.
            </Form.Label.Description>
            <Form.Input.Text
              value={external}
              onChange={function (event) {
                setExternal(event.target.value);
                setErrors({ ...errors, external: null });
              }}
              placeholder="https://my-awesome-token.com/about"
              error={errors.external}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label>Collection</Form.Label>
            <Form.Label.Description>
              Save to an existing collection. This is optional.
            </Form.Label.Description>
            <Form.Input.Select
              options={filteredCollections}
              onInputClick={function (event) {
                if (event.type === "click") {
                  setShowCollections(true);
                } else if (event.type === "mousedown") {
                  setShowCollections(false);
                }
              }}
              onInputChange={function (event) {
                setCollection(event.target.value);
              }}
              onOptionClick={function (event) {
                setCollection(event.target.value);
                setShowCollections(false);
              }}
              inputValue={collection}
              showOptions={showCollections}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-3/4 flex flex-col justify-start items-start gap-2.5">
                <Form.Label>Traits</Form.Label>
                <Form.Label.Description>
                  Optionally, organize or label your NFTs with unique qualities.
                </Form.Label.Description>
              </div>
              <Form.Input.Button
                onClick={function () {
                  setShowTraitModal(true);
                }}
              >
                <img src={AddIcon} className="w-8 h-8" />
              </Form.Input.Button>
            </div>
            {traits.length !== 0 && (
              <TraitList
                traits={traits}
                onRemove={function (key) {
                  setTraits(
                    traits.filter(function (trait) {
                      const [_key, _value] = trait.split(":");
                      if (key !== _key) {
                        return trait;
                      }
                    })
                  );
                }}
              />
            )}
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
          </Form.Group>
          <Form.Group className="mt-10">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-3/4 flex flex-col justify-start items-start gap-2.5">
                <Form.Label>Unlockables</Form.Label>
                <Form.Label.Description>
                  Offer unlockables and utilities to your fans. Totally
                  optional.
                </Form.Label.Description>
              </div>
              <Form.Input.Switch
                state={unlockable !== null ? "on" : "off"}
                onClick={function () {
                  if (unlockable !== null) setUnlockable(null);
                  else setUnlockable("");
                }}
              />
            </div>
            {unlockable !== null && (
              <Form.Input.TextArea
                placeholder="Enter any content (keys, codes, links, etc.)"
                value={unlockable}
                onChange={function (event) {
                  setUnlockable(event.target.value);
                }}
              />
            )}
          </Form.Group>
          <Form.Group className="mt-10">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-3/4 flex flex-col justify-start items-start gap-2.5">
                <Form.Label>Explicit Content</Form.Label>
                <Form.Label.Description>
                  Please set this item as explicit if it contains any sensitive
                  content.
                </Form.Label.Description>
              </div>
              <Form.Input.Switch
                state={explicit ? "on" : "off"}
                onClick={function () {
                  setExplicit(!explicit);
                }}
              />
            </div>
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label error={errors.supply}>Supply</Form.Label>
            <Form.Label.Description>
              The number of tokens that can be minted. No gas fees.
            </Form.Label.Description>
            <Form.Input.Number
              value={supply}
              onChange={function (event) {
                setSupply(Number.parseInt(event.target.value));
                setErrors({ ...errors, supply: null });
              }}
              min={1}
              error={errors.supply}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label>Blockchain</Form.Label>
            <Form.Label.Description>
              This will be the blockchain that your token will be minted to by
              default when someone first buys it.
            </Form.Label.Description>
            <div className="w-full h-11 bg-secondary3 rounded-lg px-5 flex flex-row justify-start items-center gap-2 pointer-events-none">
              <img className="w-8 h-8" src={TezosLogo} alt="Tezos baby!" />
              <p className="font-medium text-secondary1/75">Tezos</p>
            </div>
          </Form.Group>
          <Form.Group className="mt-20">
            <Form.Submit onClick={handleSubmit}>Create</Form.Submit>
          </Form.Group>
        </div>
      </Layout.Page.Container>
    </Layout.Page>
  );
}

export default CreateToken;
