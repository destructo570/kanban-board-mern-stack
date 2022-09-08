import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddNewColumn from "../components/boardView/AddNewColumn";
import BoardView from "../components/boardView/BoardView";
import StatusColumns from "../components/boardView/StatusColumns";
import Wrapper from "../components/common/Wrapper/Wrapper";
import ViewTaskContainer from "./ViewTaskContainer";
import { getUserThemePref } from "../helpers/helpers";
import EditDialog from "../components/common/editDialog/EditDialog";

export default function BoardViewContainer() {
  const activeBoard = useSelector((state) => state.board.activeBoard);
  const [showTask, setShowTask] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const isDark = getUserThemePref();
  const [showEdit, setShowEdit] = useState(false);
  const [editingList, setEditingList] = useState(null);
  const statusList = activeBoard?.lists.map((list) => list.title);

  const taskItemClickHandler = (task) => {
    setCurrentTask(task);
    setShowTask((prev) => !prev);
  };
  const toggleShowEdit = () => setShowEdit((prev) => !prev);
  const toggleShowTask = () => setShowTask((prev) => !prev);
  const taskItemEditHandler = (task) => {};
  const taskItemDeleteHandler = (task) => {};
  const listItemEditHandler = (title) => {
    console.log(title);
    console.log(editingList);
  };
  const listItemDeleteHandler = (list) => {};

  const onListEdit = (task) => {
    setEditingList(task);
    toggleShowEdit();
  };
  return (
    <>
      <Wrapper bgColor={isDark ? "#282836" : "#F3F8FF"} minHeight="100%">
        <BoardView>
          <StatusColumns
            dataSource={activeBoard}
            onTaskClick={taskItemClickHandler}
            onTaskEdit={taskItemEditHandler}
            onTaskDelete={taskItemDeleteHandler}
            onListEdit={onListEdit}
            onListDelete={listItemDeleteHandler}
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

      {showEdit && (
        <EditDialog
          onClose={toggleShowEdit}
          onSubmit={listItemEditHandler}
          title="Edit list name"
        />
      )}
    </>
  );
}
