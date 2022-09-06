import React from "react";
import { BoardListItem, BoardListItemName } from "./styles";
import { ReactComponent as BoardListItemIcon } from "../../assets/icons/layout.svg";

export default function BoardItem({ name, ...rest }) {
  return (
    <BoardListItem {...rest}>
      <BoardListItemIcon />
      <BoardListItemName>{name}</BoardListItemName>
    </BoardListItem>
  );
}
