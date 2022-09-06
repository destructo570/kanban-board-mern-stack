import React from "react";
import Wrapper from "../common/Wrapper/Wrapper";
import BoardItem from "./BoardItem";
import { BoardTitle, BoardList } from "./styles";
export default function AllBoards({ dataSource, onBoardClick }) {
  const boardItems = dataSource.map((item) => {
    return (
      <BoardItem
        key={item._id}
        name={item.title}
        onClick={onBoardClick.bind(null, item._id)}
      />
    );
  });
  return (
    <Wrapper direction="column" margin="1em 0 0 0">
      <BoardTitle>{`All boards (${dataSource.length})`}</BoardTitle>
      <BoardList>{boardItems}</BoardList>
    </Wrapper>
  );
}
