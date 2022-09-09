import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import MyBoardsPage from "./pages/MyBoardsPage";
import Wrapper from "./components/common/Wrapper/Wrapper";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAuthDataFromStorage,
  isAuthTokenExpired,
} from "./helpers/auth-helpers";
import authSlice from "./store/auth-slice";

function App({ setIsDark }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthTokenExpired()) {
      dispatch(authSlice.actions.login(getAuthDataFromStorage()));
      navigate("/boards");
    } else {
      navigate("/home");
    }
  }, [dispatch, navigate]);

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/boards"
          element={<MyBoardsPage setIsDark={setIsDark} />}
        />
      </Routes>
    </Wrapper>
  );
}

export default App;
