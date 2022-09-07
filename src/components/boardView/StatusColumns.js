import React from "react";

import StatusColumnsItem from "./StatusColumnsItem";
import { StatusColumnsList } from "./styles";

export default function StatusColumns({ dataSource, onTaskClick }) {
  let content = null;

  if (dataSource) {
    content = dataSource?.lists.map((item, index) => {
      return (
        <StatusColumnsItem
          key={item._id}
          dataSource={item}
          onTaskClick={onTaskClick}
        />
      );
    });
  }
  return <StatusColumnsList>{content}</StatusColumnsList>;
}
