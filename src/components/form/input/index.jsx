import React from "react";

import Upload from "./Upload";
import Button from "./Button";
import Number from "./Number";
import Select from "./Select";
import Switch from "./Switch";
import Text from "./Text";
import TextArea from "./TextArea";

function Input() {
  return <div>Input</div>;
}

Input.Upload = Upload;
Input.Button = Button;
Input.Number = Number;
Input.Select = Select;
Input.Switch = Switch;
Input.Text = Text;
Input.TextArea = TextArea;

export default Input;
