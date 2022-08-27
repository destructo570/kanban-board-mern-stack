import React from "react";
import { BoardListItem, BoardListItemName } from "./styles";
import { ReactComponent as BoardListItemIcon } from "../../assets/icons/layout.svg";

export default function BoardItem({ name }) {
  return (
    <BoardListItem>
      <BoardListItemIcon />
      <BoardListItemName>{name}</BoardListItemName>
    </BoardListItem>
  );
}
