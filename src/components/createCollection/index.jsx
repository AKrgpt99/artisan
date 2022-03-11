import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import TezosLogo from "../../assets/images/XTZ_2011.svg";
import ArtisanCoinLogo from "../../assets/images/artisancoin_logo.png";
import TezosCoinLogo from "../../assets/images/tezos-logo.png";
import Loading from "../../assets/images/loading-buffering.gif";

import { fetchCollectionsByName } from "../../features/collections/collectionSlice";
import { isFloat, CATEGORIES } from "../../utils";

import Form from "../form";
import Layout from "../layout";

import {
  websiteIsValid,
  instagramUsernameIsValid,
  twitterUsernameIsValid,
  pathIsValid,
} from "../../utils";

function CreateCollection() {
  const [logoURI, setLogoURI] = useState("");
  const [featureURI, setFeatureURI] = useState("");
  const [bannerURI, setBannerURI] = useState("");
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [showCategories, setShowCategories] = useState("");
  const [externals, setExternals] = useState({
    website: "",
    instagram: "",
    twitter: "",
    discord: "",
  });
  const [royalty, setRoyalty] = useState();
  const [explicit, setExplicit] = useState(false);
  const [errors, setErrors] = useState({});
  const [freeze, setFreeze] = useState({});
  const { loading, collections } = useSelector(function (state) {
    return state.collections;
  });
  const dispatch = useDispatch();

  const filteredCategories = CATEGORIES.filter(function ({ value }) {
    if (value.toLowerCase().includes(category.toLowerCase())) {
      return value;
    }
  });

  useEffect(
    function () {
      if (collections.length !== 0) {
        setErrors({ ...errors, name: "Already exists." });
      } else {
        setErrors({ ...errors, name: null });
      }
    },
    [collections]
  );

  function handleSubmit() {
    // validation
    let tempErrors = {};

    if (logoURI === "") {
      tempErrors.logoURI = "Logo is required.";
    }

    if (featureURI === "") {
      tempErrors.featureURI = "Feature is required.";
    }

    if (bannerURI === "") {
      tempErrors.bannerURI = "Banner is required.";
    }

    if (name === "") {
      tempErrors.name = "Cannot be empty.";
    }

    if (description === "") {
      tempErrors.description = "Cannot be empty.";
    }

    if (category === "") {
      tempErrors.category = "Please choose a category.";
    }

    if (!isFloat(royalty) || !Number.isInteger(royalty)) {
      tempErrors.royalty = "Must be a real number, atleast 0.";
    }

    if (tempErrors !== {}) {
      setErrors(tempErrors);
      window.scrollTo(0, 0);
      return;
    }

    // TODO: api
    setFreeze(true);
  }

  return (
    <Layout.Page>
      <Layout.Page.Header>Create Collection</Layout.Page.Header>
      <Layout.Page.Container>
        <div className="w-full lg:w-[36rem] flex flex-col justify-center items-center">
          <Form.Group>
            <Form.Label error={errors.logoURI}>Logo Image</Form.Label>
            <Form.Label.Description>
              350 x 350 pixels recommended.
            </Form.Label.Description>
            <Form.Input.Upload
              value={logoURI}
              onChange={function (event) {
                setLogoURI(URL.createObjectURL(event.target.files[0]));
                setErrors({ ...errors, logoURI: null });
              }}
              variation="logo"
              accept="image/*"
              error={errors.logoURI}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label error={errors.featureURI}>Featured Image</Form.Label>
            <Form.Label.Description>
              600 x 400 pixels recommended.
            </Form.Label.Description>
            <Form.Input.Upload
              value={featureURI}
              onChange={function (event) {
                setFeatureURI(URL.createObjectURL(event.target.files[0]));
                setErrors({ ...errors, featureURI: null });
              }}
              variation="feature"
              accept="image/*"
              error={errors.featureURI}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label error={errors.bannerURI}>Banner Image</Form.Label>
            <Form.Label.Description>
              1400 x 400 pixels recommended.
            </Form.Label.Description>
            <Form.Input.Upload
              value={bannerURI}
              onChange={function (event) {
                setBannerURI(URL.createObjectURL(event.target.files[0]));
                setErrors({ ...errors, bannerURI: null });
              }}
              variation="banner"
              accept="image/*"
              error={errors.bannerURI}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <div className="w-full flex flex-row justify-start items-center gap-2">
              <Form.Label error={errors.name}>Name</Form.Label>
              {loading && (
                <img src={Loading} className="w-4 h-4 pointer-events-none" />
              )}
            </div>
            <Form.Input.Text
              placeholder="The Collection of Heroes"
              value={name}
              onChange={function (event) {
                setName(event.target.value);
                setSlug(event.target.value.replaceAll(" ", "-").toLowerCase());
                dispatch(fetchCollectionsByName(event.target.value));
              }}
              error={errors.name}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label>Slug</Form.Label>
            <Form.Label.Description>
              This will be used at the end of the URL to navigate to this
              collection. Matches the name you set.
            </Form.Label.Description>
            <Form.Input.Text
              value={`https://myartisan.ca/collections/${
                slug === "" ? "the-collection-of-heroes" : slug
              }`}
              onChange={function (event) {
                setSlug(slug);
              }}
              className="!text-secondary1/50 !font-medium !point-events-none !drop-shadow-none !bg-secondary3"
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label error={errors.description}>Description</Form.Label>
            <Form.Input.TextArea
              placeholder="This is a cool collection."
              value={description}
              onChange={function (event) {
                setDescription(event.target.value);
                setErrors({ ...errors, description: null });
              }}
              error={errors.description}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label error={errors.category}>Category</Form.Label>
            <Form.Label.Description>
              This will help make your item searchable on Artisan.
            </Form.Label.Description>
            <Form.Input.Select
              options={filteredCategories}
              onInputClick={function (event) {
                if (event.type === "click") {
                  setShowCategories(true);
                } else if (event.type === "mousedown") {
                  setShowCategories(false);
                }
              }}
              onInputChange={function (event) {
                setCategory(event.target.value);
                setErrors({ ...errors, category: null });
              }}
              onOptionClick={function (event) {
                setCategory(event.target.value);
                setShowCategories(false);
                setErrors({ ...errors, category: null });
              }}
              inputValue={category}
              showOptions={showCategories}
              error={errors.category}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label>External Links</Form.Label>
            <Form.Input.Socials.Website
              value={externals.website}
              onChange={function (event) {
                setExternals({ ...externals, website: event.target.value });

                // validation
                if (!websiteIsValid(event.target.value)) {
                  setErrors({
                    ...errors,
                    externalWebsite: true,
                  });
                } else {
                  setErrors({
                    ...errors,
                    externalWebsite: false,
                  });
                }

                if (event.target.value === "") {
                  setErrors({
                    ...errors,
                    externalWebsite: false,
                  });
                }
              }}
              error={errors.externalWebsite}
            />
            <Form.Input.Socials.Instagram
              value={externals.instagram}
              onChange={function (event) {
                setExternals({ ...externals, instagram: event.target.value });

                // validation
                if (!instagramUsernameIsValid(event.target.value)) {
                  setErrors({
                    ...errors,
                    externalInstagram: true,
                  });
                } else {
                  setErrors({
                    ...errors,
                    externalInstagram: false,
                  });
                }

                if (event.target.value === "") {
                  setErrors({
                    ...errors,
                    externalInstagram: false,
                  });
                }
              }}
              placeholder="handle"
              error={errors.externalInstagram}
            />
            <Form.Input.Socials.Twitter
              value={externals.twitter}
              onChange={function (event) {
                setExternals({ ...externals, twitter: event.target.value });

                // validation
                if (!twitterUsernameIsValid(event.target.value)) {
                  setErrors({
                    ...errors,
                    externalTwitter: true,
                  });
                } else {
                  setErrors({
                    ...errors,
                    externalTwitter: false,
                  });
                }

                if (event.target.value === "") {
                  setErrors({
                    ...errors,
                    externalTwitter: false,
                  });
                }
              }}
              placeholder="handle"
              error={errors.externalTwitter}
            />
            <Form.Input.Socials.Discord
              value={externals.discord}
              onChange={function (event) {
                setExternals({ ...externals, discord: event.target.value });

                // validation
                if (!pathIsValid(event.target.value)) {
                  setErrors({
                    ...errors,
                    externalDiscord: true,
                  });
                } else {
                  setErrors({
                    ...errors,
                    externalDiscord: false,
                  });
                }

                if (event.target.value === "") {
                  setErrors({
                    ...errors,
                    externalDiscord: false,
                  });
                }
              }}
              placeholder="abcdef"
              error={errors.externalDiscord}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label error={errors.royalty}>Royalties</Form.Label>
            <Form.Label.Description>
              This is the percentage you make every time someone buys your NFT.
              The maximum royalty you can set is 10%.
            </Form.Label.Description>
            <Form.Input.Number
              value={royalty}
              onChange={function (event) {
                setRoyalty(event.target.value);
                setErrors({ ...errors, royalty: null });
              }}
              min={0}
              max={10}
              placeholder="e.g. 5.5%"
              error={errors.royalty}
            />
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label>Blockchain</Form.Label>
            <Form.Label.Description>
              This will be the blockchain that your collection will be created
              on by default.
            </Form.Label.Description>
            <div className="w-full h-11 bg-secondary3 rounded-lg px-5 flex flex-row justify-start items-center gap-2 pointer-events-none">
              <img className="w-8 h-8" src={TezosLogo} alt="Tezos baby!" />
              <p className="font-medium text-secondary1/75">Tezos</p>
            </div>
          </Form.Group>
          <Form.Group className="mt-10">
            <Form.Label>Payments</Form.Label>
            <Form.Label.Description>
              These are the default tokens that collectors will be able to use
              in order to buy NFTs in this collection.
            </Form.Label.Description>
            <div className="w-full grid grid-cols-3 gap-2.5">
              <div className="w-full py-2 flex flex-row justify-center items-center border-2 border-primary bg-primary/[0.125] rounded-lg grid grid-cols-2 pointer-events-none">
                <div className="w-full flex justify-center items-center">
                  <img
                    src={TezosCoinLogo}
                    alt="ethereum logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-bold">XTZ</p>
                  <p className="text-xs text-secondary1/50 font-medium">
                    Tezos
                  </p>
                </div>
              </div>
              <div className="w-full py-2 flex flex-row justify-center items-center border-2 border-primary bg-primary/[0.125] rounded-lg grid grid-cols-2 pointer-events-none">
                <div className="w-full flex justify-center items-center">
                  <img
                    src={ArtisanCoinLogo}
                    alt="ethereum logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-bold">RTZN</p>
                  <p className="text-xs text-secondary1/50 font-medium">
                    ArtisanCoin
                  </p>
                </div>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mt-10">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-3/4 flex flex-col justify-start items-start gap-2.5">
                <Form.Label>Explicit Content</Form.Label>
                <Form.Label.Description>
                  Please set this collection as explicit if it contains any
                  sensitive content.
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
          <Form.Group className="mt-20">
            <Form.Submit onClick={handleSubmit}>Create</Form.Submit>
          </Form.Group>
        </div>
      </Layout.Page.Container>
    </Layout.Page>
  );
}

export default CreateCollection;
