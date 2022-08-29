import React from "react";
import { InputWrapper, InputError, Input } from "./styles";

export default function FormInput(props) {
  const { placeholder, onChange, value, hasError, errorMessage, type } = props;
  return (
    <InputWrapper margin={props.margin}>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {hasError && <InputError>{errorMessage}</InputError>}
    </InputWrapper>
  );
}
