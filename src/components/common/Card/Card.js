import React from "react";
import { CardContainer } from "./styles";

export default function Card({ children, width, ...rest }) {
  return (
    <CardContainer width={width} {...rest}>
      {children}
    </CardContainer>
  );
}
