import React from "react";
import logo from "../../assets/icons/logo.svg";
import Wrapper from "../common/Wrapper/Wrapper";
import { Title } from "./styles";

export default function SideBarLogo({ children }) {
  return (
    <Wrapper padding="0 1em">
      <img src={logo} alt="logo" />
      <Title>Kanban</Title>
    </Wrapper>
  );
}
