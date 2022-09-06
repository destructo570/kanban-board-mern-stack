import React, { useEffect, useState } from "react";
import MyBoardsPage from "./pages/MyBoardsPage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { boardActions } from "./store/board-slice";
import Wrapper from "./components/common/Wrapper/Wrapper";

function App({ setIsDark }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const HOST_URL = process.env.REACT_APP_HOST_URL;
    const URL = HOST_URL + "boards";

    axios
      .get(URL)
      .then((response) => {
        dispatch(boardActions.replaceBoards(response.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <Wrapper>
      <MyBoardsPage setIsDark={setIsDark} />
    </Wrapper>
  );
}

export default App;
