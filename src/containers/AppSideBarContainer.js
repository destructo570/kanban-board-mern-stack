import React from "react";
import AllBoards from "../components/appSideBar/AllBoards";
import AppSideBar from "../components/appSideBar/AppSideBar";
import CreateNewBoard from "../components/appSideBar/CreateNewBoard";
import SideBarLogo from "../components/appSideBar/SideBarLogo";
import ThemeSwitch from "../components/appSideBar/ThemeSwitch";
import Wrapper from "../components/common/Wrapper/Wrapper";
import { DUMMY_BOARDS } from "../constants/constants";
export default function AppSideBarContainer() {
  const createNewBoardHandler = () => {};
  return (
    <AppSideBar>
      <Wrapper direction="column">
        <SideBarLogo />
        <AllBoards dataSource={DUMMY_BOARDS} />
        <CreateNewBoard handler={createNewBoardHandler} />
      </Wrapper>
      <Wrapper width="100%">
        <ThemeSwitch />
      </Wrapper>
    </AppSideBar>
  );
}
