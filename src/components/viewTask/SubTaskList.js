import React from "react";
import Checkbox from "../form/checkbox/Checkbox";
import { SubTaskListPane, SubTaskListItem, SubTaskBody } from "./styles";

export default function SubTaskList({ dataSource, onSubTaskClick }) {
  return (
    <SubTaskListPane>
      {dataSource.map((item) => {
        return (
          <SubTaskListItem
            key={item._id}
            onClick={onSubTaskClick.bind(null, item._id)}
          >
            <Checkbox state={item.isCompleted} />
            <SubTaskBody state={item.isCompleted}>{item.body}</SubTaskBody>
          </SubTaskListItem>
        );
      })}
    </SubTaskListPane>
  );
}
