import React, { useState } from "react";
import { SwitchPane, SwitchCircle } from "./styles";

export default function Switch() {
  const [isOn, setIsOn] = useState(false);
  return (
    <SwitchPane isOn={isOn} onClick={() => setIsOn((prev) => !prev)}>
      <SwitchCircle />
    </SwitchPane>
  );
}
