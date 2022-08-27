import React from "react";
import { Container } from "./styles";

export default function Wrapper({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
