import React from "react";
import AllBoards from "../components/appSideBar/AllBoards";
import AppSideBar from "../components/appSideBar/AppSideBar";
import CreateNewBoard from "../components/appSideBar/CreateNewBoard";
import SideBarLogo from "../components/appSideBar/SideBarLogo";
import { DUMMY_BOARDS } from "../constants/constants";
export default function AppSideBarContainer() {
  const createNewBoardHandler = () => {};
  return (
    <AppSideBar>
      <SideBarLogo />
      <AllBoards dataSource={DUMMY_BOARDS} />
      <CreateNewBoard handler={createNewBoardHandler} />
    </AppSideBar>
  );
}
