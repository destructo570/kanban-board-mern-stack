import React from "react";
import Wrapper from "../common/Wrapper/Wrapper";
import BoardItem from "./BoardItem";
import { BoardTitle, BoardList } from "./styles";
export default function AllBoards({ dataSource }) {
  const boardItems = dataSource.map((item) => {
    return <BoardItem key={item} name={item} />;
  });
  return (
    <Wrapper direction="column" margin="1em 0 0 0">
      <BoardTitle>All boards (4)</BoardTitle>
      <BoardList>{boardItems}</BoardList>
    </Wrapper>
  );
}
