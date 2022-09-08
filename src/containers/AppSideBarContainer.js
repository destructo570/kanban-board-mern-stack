import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllBoards from "../components/appSideBar/AllBoards";
import AppSideBar from "../components/appSideBar/AppSideBar";
import CreateNewBoard from "../components/appSideBar/CreateNewBoard";
import SideBarLogo from "../components/appSideBar/SideBarLogo";
import ThemeSwitch from "../components/appSideBar/ThemeSwitch";
import EditDialog from "../components/common/editDialog/EditDialog";
import Wrapper from "../components/common/Wrapper/Wrapper";
import { createNewBoard, fetchActiveBoard } from "../store/board-actions";

export default function AppSideBarContainer({ setIsDark }) {
  const [showCreate, setShowCreate] = useState(false);
  const allBoards = useSelector((state) => state.board.allBoards);
  const dispatch = useDispatch();
  const changeActiveBoardHandler = (boardId) => {
    dispatch(fetchActiveBoard(boardId));
  };
  const themeHandler = () => {
    setIsDark((prev) => !prev);
  };

  const toggleCreateDialog = () => setShowCreate((prev) => !prev);

  const createNewBoardHandler = (boardTitle) => {
    dispatch(createNewBoard(boardTitle));
    toggleCreateDialog();
  };

  return (
    <>
      <AppSideBar>
        <Wrapper direction="column">
          <SideBarLogo />
          <AllBoards
            dataSource={allBoards}
            onBoardClick={changeActiveBoardHandler}
          />
          <CreateNewBoard handler={toggleCreateDialog} />
        </Wrapper>
        <Wrapper width="100%">
          <ThemeSwitch onThemeChange={themeHandler} />
        </Wrapper>
      </AppSideBar>
      {showCreate && (
        <EditDialog
          onClose={toggleCreateDialog}
          onSubmit={createNewBoardHandler}
          title="Create new board"
        />
      )}
    </>
  );
}
