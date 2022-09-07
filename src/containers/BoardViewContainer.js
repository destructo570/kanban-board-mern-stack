import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddNewColumn from "../components/boardView/AddNewColumn";
import BoardView from "../components/boardView/BoardView";
import StatusColumns from "../components/boardView/StatusColumns";
import Wrapper from "../components/common/Wrapper/Wrapper";
import ViewTaskContainer from "./ViewTaskContainer";
import { getUserThemePref } from "../helpers/helpers";

export default function BoardViewContainer() {
  const activeBoard = useSelector((state) => state.board.activeBoard);
  const [showTask, setShowTask] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const isDark = getUserThemePref();

  const statusList = activeBoard?.lists.map((list) => list.title);

  const taskItemClickHandler = (task) => {
    setCurrentTask(task);
    setShowTask((prev) => !prev);
  };

  const toggleShowTask = () => {
    setShowTask((prev) => !prev);
  };
  return (
    <>
      <Wrapper bgColor={isDark ? "#282836" : "#F3F8FF"} minHeight="100%">
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
          statusList={statusList}
        />
      )}
    </>
  );
}
