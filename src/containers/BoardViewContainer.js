import React from "react";
import AddNewColumn from "../components/boardView/AddNewColumn";
import BoardView from "../components/boardView/BoardView";
import StatusColumns from "../components/boardView/StatusColumns";
import boardData from "../fixtures/board.json";

export default function BoardViewContainer() {
  return (
    <BoardView>
      <StatusColumns dataSource={boardData[0]} />
      <AddNewColumn />
    </BoardView>
  );
}
