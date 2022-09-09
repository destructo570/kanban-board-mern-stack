import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import { getAuthToken, signUp } from "../store/auth-actions";

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupHandler = (data, resetForm) => {
    dispatch(signUp(data, resetForm));
  };

  const signinHandler = (data) => {
    dispatch(
      getAuthToken(data, () => {
        navigate("/boards");
      })
    );
  };
  return (
    <>
      <HomeContainer onSignup={signupHandler} onSignin={signinHandler} />
    </>
  );
}
