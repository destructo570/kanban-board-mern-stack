import React from "react";
import { AddColumnContainer, AddColumnTitle } from "./styles";

export default function AddNewColumn({ onAddColumn }) {
  return (
    <AddColumnContainer onClick={onAddColumn}>
      <AddColumnTitle>+ New Column</AddColumnTitle>
    </AddColumnContainer>
  );
}
