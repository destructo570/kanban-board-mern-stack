import React from "react";
import { TextAreaWrapper, TextAreaLabel, InputError, TextArea } from "./styles";

export default function FormTextArea(props) {
  const {
    label,
    placeholder,
    onChange,
    value,
    hasError,
    errorMessage,
    type,
    width,
    minHeight,
  } = props;
  return (
    <TextAreaWrapper margin={props.margin} width={width}>
      {label && <TextAreaLabel>{label}</TextAreaLabel>}
      <TextArea
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        minHeight={minHeight}
      />
      {hasError && <InputError>{errorMessage}</InputError>}
    </TextAreaWrapper>
  );
}
