import React from "react";
import { ListItem, BoardName } from "./styles";
import { ReactComponent as BoardIcon } from "../../assets/icons/layout.svg";

export default function BoardItem({ name }) {
  return (
    <ListItem>
      <BoardIcon />
      <BoardName>{name}</BoardName>
    </ListItem>
  );
}
