import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/common/Wrapper/Wrapper";
import AppSideBarContainer from "../containers/AppSideBarContainer";
import BoardViewContainer from "../containers/BoardViewContainer";
import NavigationContainer from "../containers/NavigationContainer";
import { fetchAllBoards } from "../store/board-actions";

export default function MyBoardsPage({ setIsDark }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isAuthed) {
      navigate("/home");
    } else {
      dispatch(fetchAllBoards());
    }
  }, [auth, dispatch, navigate]);
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
