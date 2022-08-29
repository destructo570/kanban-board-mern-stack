import React, { useState } from "react";
import { FormWrapper, ActionTitle } from "./styles";
import Wrapper from "../common/Wrapper/Wrapper";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function OnboardingForm() {
  const [showForm, setShowForm] = useState(true);
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const [isSignInActive, setIsSignInActive] = useState(false);

  const showSignUpHandler = () => {
    setShowForm(true);
    setIsSignUpActive(true);
    setIsSignInActive(false);
  };

  const showSignInHandler = () => {
    setShowForm(false);
    setIsSignInActive(true);
    setIsSignUpActive(false);
  };

  return (
    <FormWrapper>
      <Wrapper width="100%" justify="space-around">
        <ActionTitle onClick={showSignUpHandler} isActive={isSignUpActive}>
          Sign Up
        </ActionTitle>
        <ActionTitle onClick={showSignInHandler} isActive={isSignInActive}>
          Sign In
        </ActionTitle>
      </Wrapper>
      <Wrapper width="100%" padding="2em 0 1em 0" justify="center">
        {!showForm && <SignInForm />}
        {showForm && <SignUpForm />}
      </Wrapper>
    </FormWrapper>
  );
}
