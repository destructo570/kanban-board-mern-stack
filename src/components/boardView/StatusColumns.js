import React from "react";
import AddNewColumn from "./AddNewColumn";
import StatusColumnsItem from "./StatusColumnsItem";
import { StatusColumnsList } from "./styles";

export default function StatusColumns({ dataSource }) {
  return (
    <StatusColumnsList>
      {dataSource.tasks.map((item, index) => {
        return <StatusColumnsItem key={index} dataSource={item} />;
      })}
      <AddNewColumn />
    </StatusColumnsList>
  );
}
