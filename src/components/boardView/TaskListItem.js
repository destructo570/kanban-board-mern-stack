import React from "react";
import Card from "../common/Card/Card";
import CardSubTitle from "../common/Card/CardSubTitle";
import CardTitle from "../common/Card/CardTitle";
import {} from "./styles";

export default function TaskListItem({ dataSource }) {
  return (
    <Card width="320px">
      <CardTitle>{dataSource.title}</CardTitle>
      <CardSubTitle>0 of 3 subtasks</CardSubTitle>
    </Card>
  );
}
