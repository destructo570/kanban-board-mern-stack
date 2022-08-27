import React from "react";
import BoardView from "../components/boardView/BoardView";
import StatusColumns from "../components/boardView/StatusColumns";
import boardData from "../fixtures/board.json";

export default function BoardViewContainer() {
  return (
    <BoardView>
      <StatusColumns dataSource={boardData[0]} />
    </BoardView>
  );
}
