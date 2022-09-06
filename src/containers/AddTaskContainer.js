import React, { useState } from "react";
import ReactDOM from "react-dom";
import Wrapper from "../components/common/Wrapper/Wrapper";
import DropDown from "../components/form/dropDown/DropDown";
import {
  AddTaskPane,
  AddTaskTitle,
  SubTaskTitle,
  StatusTitle,
} from "../components/addTask/styles";
import AddSubTaskList from "../components/addTask/AddSubTaskList";
import FormInput from "../components/form/input/FormInput";
import Button from "../components/form/button/Button";
import FormTextArea from "../components/form/textArea/FormTextArea";
import BackDrop from "../components/common/backDrop/BackDrop";

export default function AddTaskContainer({ onClose }) {
  const [subTaskList, setSubTaskList] = useState([""]);

  const statusChangeHandler = () => {};

  const createTaskHandler = () => {};
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AddTaskPane>
          <Wrapper
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
            padding="1.75em"
            borderRadius="8px"
            width="100%"
          >
            <AddTaskTitle>Add New Task</AddTaskTitle>
            <FormInput
              label="Title"
              type="text"
              placeholder="e.g. Take coffee break"
              width="100%"
            />
            <FormTextArea
              label="Description"
              type="text"
              placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
              width="100%"
              minHeight="150px"
            />
            <SubTaskTitle>Subtasks</SubTaskTitle>
            <AddSubTaskList
              subTaskList={subTaskList}
              setSubTaskList={setSubTaskList}
            />
            <StatusTitle>Status</StatusTitle>
            <DropDown
              dataSource={["todo", "doing", "done"]}
              onItemClicked={statusChangeHandler}
              width="100%"
            />
            <Button title="Create Task" onClick={createTaskHandler} />
          </Wrapper>
        </AddTaskPane>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
