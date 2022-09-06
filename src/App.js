import React, { useEffect } from "react";
import MyBoards from "./pages/MyBoardsPage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { boardActions } from "./store/board-slice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("App started...");
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
    <div>
      <MyBoards />
    </div>
  );
}

export default App;
