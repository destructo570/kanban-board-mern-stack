import React from "react";
import MoreOptions from "../common/moreOptions/MoreOptions";
import {
  StatusColumnsListItem,
  StatusColumnsListHeader,
  StatusTitle,
  TaskList,
} from "./styles";
import TaskListItem from "./TaskListItem";

export default function StatusColumnsItem({
  dataSource,
  onTaskClick,
  onTaskEdit,
  onTaskDelete,
  onListEdit,
  onListDelete,
}) {
  const listEditHandler = () => {
    onListEdit({ id: dataSource._id, title: dataSource.title });
  };
  const listDeleteHandler = () => {
    onListDelete({ id: dataSource._id, title: dataSource.title });
  };
  return (
    <StatusColumnsListItem>
      <StatusColumnsListHeader>
        <StatusTitle>{dataSource.title}</StatusTitle>
        <MoreOptions
          datasource={[
            { title: "Edit", handler: listEditHandler },
            { title: "Delete", handler: listDeleteHandler },
          ]}
        />
      </StatusColumnsListHeader>
      <TaskList>
        {dataSource.cards.map((item, index) => {
          return (
            <TaskListItem
              key={item._id}
              dataSource={item}
              onTaskClick={onTaskClick}
              onTaskEdit={onTaskEdit}
              onTaskDelete={onTaskDelete}
            />
          );
        })}
      </TaskList>
    </StatusColumnsListItem>
  );
}
