import React from "react";
import Wrapper from "../components/common/Wrapper/Wrapper";
import AppSideBarContainer from "../containers/AppSideBarContainer";
import BoardViewContainer from "../containers/BoardViewContainer";
import NavigationContainer from "../containers/NavigationContainer";

export default function Home() {
  return (
    <Wrapper alignItems="flex-start">
      <AppSideBarContainer />
      <Wrapper width="100%" direction="column">
        <NavigationContainer />
        <BoardViewContainer />
      </Wrapper>
    </Wrapper>
  );
}