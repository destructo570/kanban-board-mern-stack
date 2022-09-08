import React from "react";

import StatusColumnsItem from "./StatusColumnsItem";
import { StatusColumnsList } from "./styles";

export default function StatusColumns({
  dataSource,
  onTaskClick,
  onTaskEdit,
  onTaskDelete,
  onListEdit,
  onListDelete,
}) {
  let content = null;

  if (dataSource) {
    content = dataSource?.lists.map((item, index) => {
      return (
        <StatusColumnsItem
          key={item._id}
          dataSource={item}
          onTaskClick={onTaskClick}
          onTaskEdit={onTaskEdit}
          onTaskDelete={onTaskDelete}
          onListEdit={onListEdit}
          onListDelete={onListDelete}
        />
      );
    });
  }
  return <StatusColumnsList>{content}</StatusColumnsList>;
}
