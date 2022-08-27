import React from "react";
import { ReactComponent as LayoutIcon } from "../../assets/icons/layout.svg";
import Wrapper from "../common/Wrapper/Wrapper";
import { CreateNewTitle } from "./styles";
export default function CreateNewBoard({ handler }) {
  return (
    <Wrapper
      alignItems="center"
      onClick={handler}
      cursor="pointer"
      canHover={true}
      padding="0 1em"
      justify="flex-start"
    >
      <LayoutIcon />
      <CreateNewTitle>Create New Board</CreateNewTitle>
    </Wrapper>
  );
}
