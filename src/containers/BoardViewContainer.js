import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNewColumn from "../components/boardView/AddNewColumn";
import BoardView from "../components/boardView/BoardView";
import StatusColumns from "../components/boardView/StatusColumns";
import boardData from "../fixtures/board.json";
import { boardActions } from "../store/board-slice";
import ViewTaskContainer from "./ViewTaskContainer";

export default function BoardViewContainer() {
  const activeBoard = useSelector((state) => state.board.activeBoard);
  const [showTask, setShowTask] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const taskItemClickHandler = (task) => {
    setCurrentTask(task);
    setShowTask((prev) => !prev);
  };

  // useEffect(()=>{

  // }, [currentTask])

  const toggleShowTask = () => {
    setShowTask((prev) => !prev);
  };
  return (
    <>
      <BoardView>
        <StatusColumns
          dataSource={activeBoard}
          onTaskClick={taskItemClickHandler}
        />
        <AddNewColumn />
      </BoardView>
      {showTask && (
        <ViewTaskContainer
          task={currentTask}
          onClose={toggleShowTask}
          statusList={activeBoard?.status_list}
        />
      )}
    </>
  );
}
