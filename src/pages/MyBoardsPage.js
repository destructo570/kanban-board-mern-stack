import React from "react";
import Wrapper from "../components/common/Wrapper/Wrapper";
import AppSideBarContainer from "../containers/AppSideBarContainer";
import BoardViewContainer from "../containers/BoardViewContainer";
import NavigationContainer from "../containers/NavigationContainer";

export default function MyBoardsPage({ setIsDark }) {
  return (
    <>
      <Wrapper width="100%">
        <AppSideBarContainer setIsDark={setIsDark} />
        <Wrapper width="100%" direction="column" minHeight="1080px">
          <NavigationContainer />
          <BoardViewContainer />
        </Wrapper>
      </Wrapper>
    </>
  );
}
