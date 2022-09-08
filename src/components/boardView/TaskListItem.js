import React, { useState } from "react";
import Card from "../common/Card/Card";
import CardSubTitle from "../common/Card/CardSubTitle";
import CardTitle from "../common/Card/CardTitle";
import { TaskListItemTitle } from "./styles";

import MoreOptions from "../common/moreOptions/MoreOptions";

export default function TaskListItem({
  dataSource,
  onTaskClick,
  onTaskEdit,
  onTaskDelete,
}) {
  const numOfSubTasks = dataSource.checkList.length;
  let numOfCompletedSubTask = 0;

  dataSource.checkList.forEach((subtask) => {
    if (subtask.isCompleted) numOfCompletedSubTask++;
  });

  const onClickHandler = () => {
    onTaskClick(dataSource);
  };

  const taskEditHandler = (e) => {
    e.stopPropagation();
    onTaskEdit(dataSource);
  };

  const taskDeleteHandler = (e) => {
    e.stopPropagation();
    onTaskDelete(dataSource);
  };

  return (
    <Card width="320px" onClick={onClickHandler}>
      <TaskListItemTitle>
        <CardTitle>{dataSource.title}</CardTitle>
        <MoreOptions
          datasource={[
            { title: "Edit", handler: taskEditHandler },
            { title: "Delete", handler: taskDeleteHandler },
          ]}
        />
      </TaskListItemTitle>
      <CardSubTitle>{`${numOfCompletedSubTask} of ${numOfSubTasks} subtasks`}</CardSubTitle>
    </Card>
  );
}
