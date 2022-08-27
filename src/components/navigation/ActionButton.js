import React from "react";
import { Button, ImageIcon } from "./styles";
export default function ActionButton(props) {
  const { title, handler, icon } = props;
  return (
    <Button onClick={handler}>
      <ImageIcon src={icon} alt="" />
      <span>{title}</span>
    </Button>
  );
}
