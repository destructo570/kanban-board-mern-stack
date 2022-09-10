import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../common/Wrapper/Wrapper";
import BoardItem from "./BoardItem";
import { BoardTitle, BoardList } from "./styles";
export default function AllBoards({
  dataSource,
  onBoardClick,
  onBoardEdit,
  onBoardDelete,
}) {
  const activeBoard = useSelector((state) => state.board.activeBoard);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setCurrent(activeBoard);
  }, [activeBoard]);

  const boardItems = dataSource.map((item) => {
    return (
      <BoardItem
        key={item._id}
        board={item}
        isActive={current?._id === item._id}
        onClick={onBoardClick.bind(null, item._id)}
        onBoardEdit={onBoardEdit.bind(null, item)}
        onBoardDelete={onBoardDelete.bind(null, item)}
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
