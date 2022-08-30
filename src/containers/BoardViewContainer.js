import React, { useState } from "react";
import AddNewColumn from "../components/boardView/AddNewColumn";
import BoardView from "../components/boardView/BoardView";
import StatusColumns from "../components/boardView/StatusColumns";
import boardData from "../fixtures/board.json";
import ViewTaskContainer from "./ViewTaskContainer";

export default function BoardViewContainer() {
  const [showTask, setShowTask] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const taskItemClickHandler = (task) => {
    setCurrentTask(task);
    setShowTask((prev) => !prev);
  };

  const toggleShowTask = () => {
    setShowTask((prev) => !prev);
  };
  return (
    <>
      <BoardView>
        <StatusColumns
          dataSource={boardData[0]}
          onTaskClick={taskItemClickHandler}
        />
        <AddNewColumn />
      </BoardView>
      {showTask && (
        <ViewTaskContainer task={currentTask} onClose={toggleShowTask} />
      )}
    </>
  );
}
