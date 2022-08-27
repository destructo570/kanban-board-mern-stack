import React from "react";
import logo from "../../assets/icons/logo.svg";
import Wrapper from "../common/Wrapper/Wrapper";
import { SideBarTitle } from "./styles";

export default function SideBarLogo({ children }) {
  const clickHandler = () => {};
  return (
    <Wrapper
      padding="0 1em"
      justify="flex-start"
      cursor="pointer"
      onClick={clickHandler}
    >
      <img src={logo} alt="logo" />
      <SideBarTitle>Kanban</SideBarTitle>
    </Wrapper>
  );
}
