import React, { useState } from "react";
import Wrapper from "../components/common/Wrapper/Wrapper";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import addIcon from "../assets/icons/add.svg";
import DropDown from "../components/form/dropDown/DropDown";
import ActionButton from "../components/navigation/ActionButton";
import Navigation from "../components/navigation/Navigation";
import AddTaskContainer from "./AddTaskContainer";
import { boardActions } from "../store/board-slice";
import { useDispatch, useSelector } from "react-redux";

export default function NavigationContainer() {
  const activeBoard = useSelector((state) => state.board.activeBoard);
  const allBoards = useSelector((state) => state.board.allBoards);
  const dispatch = useDispatch();
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const onBoardClickedHandler = (boardTitle) => {
    const board = allBoards.find((board) => board.title === boardTitle);
    dispatch(boardActions.changeActiveBoard(board._id));
  };

  const toggleAddTaskModal = () => setShowAddTaskModal((prev) => !prev);

  let boardList = [];
  if (allBoards) boardList = allBoards.map((board) => board.title);

  return (
    <>
      <Navigation>
        <Logo />
        <Wrapper
          width="100%"
          justify="space-between"
          alignItems="center"
          margin="0 0 0 1em"
          minHeight="3rem"
        >
          <DropDown
            dataSource={boardList}
            onItemClicked={onBoardClickedHandler}
            shouldHide={true}
            initialValue={activeBoard?.title}
          />

          <ActionButton
            title="Add new task"
            icon={addIcon}
            handler={toggleAddTaskModal}
          />
        </Wrapper>
      </Navigation>
      {showAddTaskModal && <AddTaskContainer onClose={toggleAddTaskModal} />}
    </>
  );
}
