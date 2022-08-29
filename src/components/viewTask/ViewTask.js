import React from "react";
import Wrapper from "../common/Wrapper/Wrapper";
import DropDown from "../form/dropDown/DropDown";
import {
  ViewTaskPane,
  TaskTitle,
  TaskDescription,
  SubTaskTitle,
  StatusTitle,
} from "./styles";
import SubTaskList from "./SubTaskList";

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

export default function ViewTask() {
  const statusChangeHandler = () => {};
  const subTaskClickHandler = () => {};
  return (
    <ViewTaskPane>
      <Wrapper
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        padding="1.75em"
        borderRadius="8px"
      >
        <TaskTitle>
          Research pricing points of various competitors and trial difference
          buisiness models
        </TaskTitle>
        <TaskDescription>
          loreLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          finibus tempor augue, vel finibus dolor aliquet nec. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Curabitur ante mi, consequat in
          nunc id,50
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
    </ViewTaskPane>
  );
}
