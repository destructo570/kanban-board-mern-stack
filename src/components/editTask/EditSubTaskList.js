import React, { useState } from "react";
import {
  EditSubTaskListPane,
  EditSubTaskListItem,
  SubTaskBody,
} from "./styles";
import FormInput from "../form/input/FormInput";
import { ReactComponent as CloseIconLight } from "../../assets/icons/close-light.svg";
import { ReactComponent as CloseIconDark } from "../../assets/icons/close-dark.svg";
import Wrapper from "../common/Wrapper/Wrapper";
import Button from "../form/button/Button";
import { getUserThemePref } from "../../helpers/helpers";

export default function EditSubTaskList({ subTaskList, setSubTaskList }) {
  const isDark = getUserThemePref();
  const addSubTaskClickHandler = () => {
    setSubTaskList((prev) => {
      const newState = [...prev, ""];
      return newState;
    });
  };
  const removeClickHandler = (index) => {
    if (subTaskList.length === 1) return;
    setSubTaskList((prev) => {
      const newState = prev.filter((item, idx) => index !== idx);
      return newState;
    });
  };
  const inputChangeHandler = (index, event) => {
    setSubTaskList((prev) => {
      const newState = [...prev];
      newState[index] = event.target.value;
      return newState;
    });
  };

  const subTaskInputItems = subTaskList.map((item, index) => {
    return (
      <EditSubTaskListItem key={index}>
        <FormInput
          width="100%"
          placeholder="e.g. This is a subtask."
          value={item}
          onChange={inputChangeHandler.bind(null, index)}
        />
        {isDark ? (
          <CloseIconLight onClick={removeClickHandler.bind(null, index)} />
        ) : (
          <CloseIconDark onClick={removeClickHandler.bind(null, index)} />
        )}
      </EditSubTaskListItem>
    );
  });

  return (
    <Wrapper direction="column" width="100%">
      <EditSubTaskListPane>{subTaskInputItems}</EditSubTaskListPane>
      <Button title="Add new sub task" onClick={addSubTaskClickHandler} />
    </Wrapper>
  );
}
