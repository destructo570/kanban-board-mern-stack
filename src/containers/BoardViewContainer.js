import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddNewColumn from "../components/boardView/AddNewColumn";
import BoardView from "../components/boardView/BoardView";
import StatusColumns from "../components/boardView/StatusColumns";
import Wrapper from "../components/common/Wrapper/Wrapper";
import ViewTaskContainer from "./ViewTaskContainer";

export default function BoardViewContainer() {
  const activeBoard = useSelector((state) => state.board.activeBoard);
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
      <Wrapper>
        <BoardView>
          <StatusColumns
            dataSource={activeBoard}
            onTaskClick={taskItemClickHandler}
          />
          <AddNewColumn />
        </BoardView>
      </Wrapper>

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
