import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Wrapper from "../common/Wrapper/Wrapper";
import { SideBarLogoTitle } from "./styles";

export default function SideBarLogo({ children }) {
  const clickHandler = () => {};
  return (
    <Wrapper
      padding="0 1em"
      justify="flex-start"
      alignItems="center"
      cursor="pointer"
      onClick={clickHandler}
    >
      <Logo />
      <SideBarLogoTitle>Kanban</SideBarLogoTitle>
    </Wrapper>
  );
}
