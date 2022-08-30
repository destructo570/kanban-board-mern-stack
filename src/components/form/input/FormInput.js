import React from "react";
import { InputWrapper, InputLabel, InputError, Input } from "./styles";

export default function FormInput(props) {
  const {
    label,
    placeholder,
    onChange,
    value,
    hasError,
    errorMessage,
    type,
    width,
  } = props;
  return (
    <InputWrapper margin={props.margin} width={width}>
      {label && <InputLabel>{label}</InputLabel>}
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
