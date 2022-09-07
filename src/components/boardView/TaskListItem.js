import React from "react";
import Card from "../common/Card/Card";
import CardSubTitle from "../common/Card/CardSubTitle";
import CardTitle from "../common/Card/CardTitle";
import {} from "./styles";

export default function TaskListItem({ dataSource, onTaskClick }) {
  const numOfSubTasks = dataSource.checkList.length;
  let numOfCompletedSubTask = 0;

  dataSource.checkList.forEach((subtask) => {
    if (subtask.isCompleted) numOfCompletedSubTask++;
  });

  const onClickHandler = () => {
    onTaskClick(dataSource);
  };
  return (
    <Card width="320px" onClick={onClickHandler}>
      <CardTitle>{dataSource.title}</CardTitle>
      <CardSubTitle>{`${numOfCompletedSubTask} of ${numOfSubTasks} subtasks`}</CardSubTitle>
    </Card>
  );
}
