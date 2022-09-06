import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AllBoards from "../components/appSideBar/AllBoards";
import AppSideBar from "../components/appSideBar/AppSideBar";
import CreateNewBoard from "../components/appSideBar/CreateNewBoard";
import SideBarLogo from "../components/appSideBar/SideBarLogo";
import ThemeSwitch from "../components/appSideBar/ThemeSwitch";
import Wrapper from "../components/common/Wrapper/Wrapper";
import { boardActions } from "../store/board-slice";

export default function AppSideBarContainer() {
  const allBoards = useSelector((state) => state.board.allBoards);
  const dispatch = useDispatch();
  const changeActiveBoardHandler = (boardId) => {
    dispatch(boardActions.changeActiveBoard(boardId));
  };

  const createNewBoardHandler = () => {};
  return (
    <AppSideBar>
      <Wrapper direction="column">
        <SideBarLogo />
        <AllBoards
          dataSource={allBoards}
          onBoardClick={changeActiveBoardHandler}
        />
        <CreateNewBoard handler={createNewBoardHandler} />
      </Wrapper>
      <Wrapper width="100%">
        <ThemeSwitch />
      </Wrapper>
    </AppSideBar>
  );
}
