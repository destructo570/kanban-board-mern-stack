import React from "react";
import { ReactComponent as LayoutIconLight } from "../../assets/icons/layout-light.svg";
import { ReactComponent as LayoutIconDark } from "../../assets/icons/layout-dark.svg";
import Wrapper from "../common/Wrapper/Wrapper";
import { CreateNewTitle } from "./styles";
import { getUserThemePref } from "../../helpers/helpers";

export default function CreateNewBoard({ handler }) {
  const isDark = getUserThemePref();
  return (
    <Wrapper
      alignItems="center"
      onClick={handler}
      cursor="pointer"
      canHover={true}
      padding="0 1em"
      justify="flex-start"
    >
      {isDark ? <LayoutIconLight /> : <LayoutIconDark />}
      <CreateNewTitle>Create New Board</CreateNewTitle>
    </Wrapper>
  );
}
