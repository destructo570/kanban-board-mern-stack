import React, { useState } from "react";
import Checkbox from "../form/checkbox/Checkbox";
import { SubTaskListPane, SubTaskListItem, SubTaskBody } from "./styles";

export default function SubTaskList({ dataSource }) {
  const [subTaskList, setSubTaskList] = useState(dataSource);

  const subTaskClickHandler = (id) => {
    setSubTaskList((prev) => {
      const newState = [...prev];
      prev.forEach((item) => {
        if (item.id === id) item.isComplete = !item.isComplete;
      });
      return newState;
    });
  };

  return (
    <SubTaskListPane>
      {subTaskList.map((item) => {
        return (
          <SubTaskListItem
            key={item._id}
            onClick={subTaskClickHandler.bind(null, item.id)}
          >
            <Checkbox state={item.isComplete} />
            <SubTaskBody state={item.isComplete}>{item.body}</SubTaskBody>
          </SubTaskListItem>
        );
      })}
    </SubTaskListPane>
  );
}
