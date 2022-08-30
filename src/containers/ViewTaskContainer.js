import React from "react";
import ReactDOM from "react-dom";
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

const subTasks = [
  {
    id: 1,
    body: "Research competitor pricing and buisiness models",
    isComplete: true,
  },
  {
    id: 2,
    body: "Outline a buisiness model that works for our solution",
    isComplete: true,
  },
  {
    id: 3,
    body: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
    isComplete: false,
  },
];

export default function ViewTaskContainer({ onClose }) {
  const statusChangeHandler = () => {};
  const subTaskClickHandler = () => {};
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
            <TaskTitle>
              Research pricing points of various competitors and trial
              difference buisiness models
            </TaskTitle>
            <TaskDescription>
              loreLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              finibus tempor augue, vel finibus dolor aliquet nec. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Curabitur ante mi,
              consequat in nunc id,50
            </TaskDescription>
            <SubTaskTitle>Subtasks (2 of 3)</SubTaskTitle>
            <SubTaskList dataSource={subTasks} onClick={subTaskClickHandler} />
            <StatusTitle>Status</StatusTitle>
            <DropDown
              dataSource={["todo", "doing", "done"]}
              onItemClicked={statusChangeHandler}
              width="100%"
            />
          </Wrapper>
        </ViewTaskPane>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
