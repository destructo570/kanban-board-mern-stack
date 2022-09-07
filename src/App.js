import React, { useEffect } from "react";
import MyBoardsPage from "./pages/MyBoardsPage";
import { useDispatch } from "react-redux";
import { fetchAllBoards } from "./store/board-actions";
import Wrapper from "./components/common/Wrapper/Wrapper";

function App({ setIsDark }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBoards());
  }, [dispatch]);

  return (
    <Wrapper>
      <MyBoardsPage setIsDark={setIsDark} />
    </Wrapper>
  );
}

export default App;
