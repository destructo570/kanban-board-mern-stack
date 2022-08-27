import React from "react";
import { ThemeSwitchPane, ThemeIcon } from "./styles";
import sunIconLight from "../../assets/icons/sun-light.svg";
import moonIconLight from "../../assets/icons/moon-light.svg";
import Switch from "../form/switch/Switch";
export default function ThemeSwitch() {
  return (
    <ThemeSwitchPane>
      <ThemeIcon src={sunIconLight} alt="" />
      <Switch />
      <ThemeIcon src={moonIconLight} alt="" />
    </ThemeSwitchPane>
  );
}
