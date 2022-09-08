import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormInput from "../../form/input/FormInput";
import Button from "../../form/button/Button";
import { EditPane, EditTitle } from "./styles";
import BackDrop from "../backDrop/BackDrop";

export default function EditDialog({ onClose, onSubmit, title }) {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e) => setInputValue(e.target.value);

  const clickHandler = () => {
    onSubmit(inputValue);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <EditPane>
          <EditTitle>{title}</EditTitle>
          <FormInput
            type="text"
            placeholder="Enter some text here"
            width="100%"
            value={inputValue}
            onChange={inputChangeHandler}
          />
          <Button title="Submit" onClick={clickHandler} />
        </EditPane>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
