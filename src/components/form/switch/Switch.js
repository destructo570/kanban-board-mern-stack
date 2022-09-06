import React, { useState } from "react";
import { SwitchPane, SwitchCircle } from "./styles";

export default function Switch({ initialState, onClick }) {
  const [isOn, setIsOn] = useState(initialState);
  const clickHandler = () => {
    setIsOn((prev) => !prev);
    onClick();
  };
  return (
    <SwitchPane isOn={isOn} onClick={clickHandler}>
      <SwitchCircle />
    </SwitchPane>
  );
}
