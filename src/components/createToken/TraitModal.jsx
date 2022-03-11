import React, { useEffect, useState } from "react";

import CloseIcon from "../../assets/images/close_icon.svg";

import Form from "../form";

function TraitModal({ onClose, onAdd }) {
  const [selected, setSelected] = useState("quality");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [errors, setErrors] = useState({});

  function handleSubmit() {
    let _key;
    let _value;
    let tempErrors = {};

    if (selected === "quality") {
      if (type === "") {
        tempErrors.type = "Cannot be empty.";
      } else {
        _key = type;
      }

      if (name === "") {
        tempErrors.name = "Cannot be empty.";
      } else {
        _value = name;
      }
    } else {
      if (name === "") {
        tempErrors.name = "Cannot be empty.";
      } else {
        _key = name;
      }

      if (!value || value === "") {
        tempErrors.value = "Cannot be empty.";
      } else {
        _value = value;
      }
    }

    if (tempErrors === {}) {
      onAdd(`${_key}:${_value}`);
      onClose();
    } else {
      setErrors(tempErrors);
    }
  }

  return (
    <div className="fixed p-5 w-screen h-screen top-0 left-0 bg-secondary1/50 z-50 flex justify-center items-center transition">
      <div className="w-full lg:w-[34rem] h-fit bg-white rounded-xl transition flex flex-col justify-start items-start p-5">
        <div className="w-full flex flex-row justify-between items-center">
          <h3 className="text-primary ml-2 font-bold">Add Trait</h3>
          <button onClick={onClose}>
            <img src={CloseIcon} alt="close" />
          </button>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 flex flex-row justify-between items-center gap-5 px-2 mt-5">
          <button
            onClick={function () {
              setSelected("quality");
            }}
            className={`h-36 w-full border-2 border-primary rounded-xl flex flex-col justify-start items-start transition hover:bg-primary/25 ${
              selected === "quality" && "bg-primary/25"
            }`}
          >
            <div className="w-full px-5 pt-5 pb-3 text-left">
              <h6>Quality</h6>
            </div>
            <div className="w-full px-5 pb-5 text-left">
              <p className="font-light">
                Add a textual trait like color or status.
              </p>
            </div>
          </button>
          <button
            onClick={function () {
              setSelected("quantity");
            }}
            className={`h-36 w-full border-2 border-primary rounded-xl flex flex-col justify-start items-start transition hover:bg-primary/25 ${
              selected === "quantity" && "bg-primary/25"
            }`}
          >
            <div className="w-full px-5 pt-5 pb-3 text-left">
              <h6>Quantity</h6>
            </div>
            <div className="w-full px-5 pb-5 text-left">
              <p className="font-light">
                Add a numerical trait like rating or speed.
              </p>
            </div>
          </button>
        </div>
        {selected === "quality" ? (
          <div className="w-full flex flex-col px-2">
            <Form.Group className="mt-4">
              <Form.Label error={errors.type}>Type</Form.Label>
              <Form.Label.Description>
                A label for this trait.
              </Form.Label.Description>
              <Form.Input.Text
                placeholder="Size"
                value={type}
                onChange={function (event) {
                  setType(event.target.value);
                }}
                error={errors.type}
              />
            </Form.Group>
            <Form.Group className="mt-5">
              <Form.Label error={errors.name}>Name</Form.Label>
              <Form.Label.Description>
                What the trait will be called.
              </Form.Label.Description>
              <Form.Input.Text
                value={name}
                placeholder="Small"
                onChange={function (event) {
                  setName(event.target.value);
                }}
                error={errors.name}
              />
            </Form.Group>
          </div>
        ) : (
          <div className="w-full flex flex-col px-2">
            <Form.Group className="mt-4">
              <Form.Label error={errors.name}>Name</Form.Label>
              <Form.Label.Description>
                What the trait will be called.
              </Form.Label.Description>
              <Form.Input.Text
                value={name}
                onChange={function (event) {
                  setName(event.target.value);
                }}
                placeholder="Beats per minute"
                error={errors.type}
              />
            </Form.Group>
            <Form.Group className="mt-5">
              <Form.Label error={errors.value}>Value</Form.Label>
              <Form.Label.Description>
                Define a number for this trait.
              </Form.Label.Description>
              <Form.Input.Number
                value={value}
                onChange={function (event) {
                  setValue(event.target.value);
                }}
              />
            </Form.Group>
          </div>
        )}
        <div className="w-full flex flex-row px-2 justify-end mt-7">
          <button
            onClick={handleSubmit}
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
