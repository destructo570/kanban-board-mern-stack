import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import BackDrop from "../components/common/backDrop/BackDrop";
import Wrapper from "../components/common/Wrapper/Wrapper";
import DropDown from "../components/form/dropDown/DropDown";
import Button from "../components/form/button/Button";

import {
  ViewTaskPane,
  TaskTitle,
  TaskDescription,
  SubTaskTitle,
  StatusTitle,
} from "../components/viewTask/styles";

import SubTaskList from "../components/viewTask/SubTaskList";
import { updateCardData } from "../store/board-actions";

export default function ViewTaskContainer({ task, onClose, statusList }) {
  const activeBoardList = useSelector((state) => state.board.activeBoardList);
  const [status, setStatus] = useState(null);
  const [subTasks, setSubTasks] = useState(task.checkList);
  const dispatch = useDispatch();

  useEffect(() => {
    const list = activeBoardList.find((list) => list.id === task.listId);
    setStatus(list);
  }, [activeBoardList, task.listId]);

  const statusChangeHandler = (status) => {
    setStatus(status);
  };

  const taskUpdateHandler = () => {
    dispatch(
      updateCardData({ ...task, checkList: subTasks, listId: status.id })
    );
    onClose();
  };

  const subTaskClickHandler = (id) => {
    setSubTasks((prev) => {
      const newState = prev.map((item) => {
        if (item._id === id) return { ...item, isCompleted: !item.isCompleted };
        return item;
      });
      return newState;
    });
  };

  const numOfSubTasks = task.checkList.length;
  let numOfCompletedSubTask = 0;

  task.checkList.forEach((subtask) => {
    if (subtask.isCompleted) numOfCompletedSubTask++;
  });

  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ViewTaskPane>
          <Wrapper
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
            padding="1.75em"
            borderRadius="8px"
            width="100%"
          >
            <TaskTitle>{task.title}</TaskTitle>
            <TaskDescription>{task.description}</TaskDescription>
            <SubTaskTitle>{`Subtasks (${numOfCompletedSubTask} of ${numOfSubTasks})`}</SubTaskTitle>
            <SubTaskList
              dataSource={subTasks}
              onSubTaskClick={subTaskClickHandler}
            />
            <StatusTitle>Status</StatusTitle>
            <DropDown
              dataSource={activeBoardList}
              onItemClicked={statusChangeHandler}
              initialValue={status?.value}
              width="100%"
            />
            <Button title="Update" onClick={taskUpdateHandler} />
          </Wrapper>
        </ViewTaskPane>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
