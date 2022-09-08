import React from "react";
import { BoardListItem, BoardListItemName } from "./styles";
import { ReactComponent as IconLight } from "../../assets/icons/layout-light.svg";
import { ReactComponent as IconDark } from "../../assets/icons/layout-dark.svg";
import { getUserThemePref } from "../../helpers/helpers";

export default function BoardItem({ name, isActive, ...rest }) {
  const isDark = getUserThemePref();
  return (
    <BoardListItem isActive={isActive} {...rest}>
      {isDark ? <IconLight /> : <IconDark />}
      <BoardListItemName>{name}</BoardListItemName>
    </BoardListItem>
  );
}
