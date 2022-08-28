import React from "react";
import Wrapper from "../common/Wrapper/Wrapper";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
export default function Header() {
  return (
    <Wrapper>
      <Wrapper>
        <Logo />
      </Wrapper>
    </Wrapper>
  );
}
