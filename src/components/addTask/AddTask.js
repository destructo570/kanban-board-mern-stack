import React, { useState } from "react";
import Wrapper from "../common/Wrapper/Wrapper";
import DropDown from "../form/dropDown/DropDown";
import { AddTaskPane, AddTaskTitle, SubTaskTitle, StatusTitle } from "./styles";
import AddSubTaskList from "./AddSubTaskList";
import FormInput from "../form/input/FormInput";
import Button from "../form/button/Button";
import FormTextArea from "../form/textArea/FormTextArea";

export default function AddTask() {
  const [subTaskList, setSubTaskList] = useState([""]);

  const statusChangeHandler = () => {};

  const createTaskHandler = () => {};
  return (
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
    </AddTaskPane>
  );
}
