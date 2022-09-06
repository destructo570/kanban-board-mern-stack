import React from "react";
import { StatusColumnsListItem, StatusTitle, TaskList } from "./styles";
import TaskListItem from "./TaskListItem";

export default function StatusColumnsItem({ dataSource, onTaskClick }) {
  return (
    <StatusColumnsListItem>
      <StatusTitle>{dataSource.status}</StatusTitle>
      <TaskList>
        {dataSource.tasks.map((item, index) => {
          return (
            <TaskListItem
              key={item._id}
              dataSource={item}
              onTaskClick={onTaskClick}
            />
          );
        })}
      </TaskList>
    </StatusColumnsListItem>
  );
}
