import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import BackDrop from "../components/backDrop/BackDrop";
import Wrapper from "../components/common/Wrapper/Wrapper";
import DropDown from "../components/form/dropDown/DropDown";
import {
  ViewTaskPane,
  TaskTitle,
  TaskDescription,
  SubTaskTitle,
  StatusTitle,
} from "../components/viewTask/styles";

import SubTaskList from "../components/viewTask/SubTaskList";

export default function ViewTaskContainer({ task, onClose, statusList }) {
  const statusChangeHandler = () => {};
  const subTaskClickHandler = () => {};

  const numOfSubTasks = task.sub_tasks.length;
  let numOfCompletedSubTask = 0;

  task.sub_tasks.forEach((subtask) => {
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
          >
            <TaskTitle>{task.title}</TaskTitle>
            <TaskDescription>{task.description}</TaskDescription>
            <SubTaskTitle>{`Subtasks (${numOfCompletedSubTask} of ${numOfSubTasks})`}</SubTaskTitle>
            <SubTaskList
              dataSource={task.sub_tasks}
              onClick={subTaskClickHandler}
            />
            <StatusTitle>Status</StatusTitle>
            <DropDown
              dataSource={statusList}
              onItemClicked={statusChangeHandler}
              initialValue={task.status}
              width="100%"
            />
          </Wrapper>
        </ViewTaskPane>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
