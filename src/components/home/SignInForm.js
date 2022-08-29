import React, { useState } from "react";
import FormInput from "../form/input/FormInput";
import Wrapper from "../common/Wrapper/Wrapper";
import Button from "../form/button/Button";

export default function SignInForm() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);

  const emailChangeHandler = (e) => {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailPattern.test(e.target.value)) setEmailHasError(true);
    else setEmailHasError(false);
    setEmailValue(e.target.value);
  };

  const paswordChangeHandler = (e) => {
    if (e.target.value.length < 6) setPasswordHasError(true);
    else setPasswordHasError(false);
    setPasswordValue(e.target.value);
  };

  const submitHandler = (e) => {};

  return (
    <Wrapper direction="column" width="100%">
      <FormInput
        placeholder="Enter email address"
        value={emailValue}
        hasError={emailHasError}
        errorMessage="Please enter valid email address"
        onChange={emailChangeHandler}
        type="email"
      />
      <FormInput
        placeholder="Enter password"
        value={passwordValue}
        hasError={passwordHasError}
        errorMessage="Minimum password length is 6"
        onChange={paswordChangeHandler}
        type="password"
      />
      <Button title="Sign In" onClick={submitHandler} />
    </Wrapper>
  );
}
