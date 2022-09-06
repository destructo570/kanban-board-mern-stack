import React from "react";
import { ThemeSwitchPane, ThemeIcon } from "./styles";
import sunIconLight from "../../assets/icons/sun-light.svg";
import moonIconLight from "../../assets/icons/moon-light.svg";
import sunIconDark from "../../assets/icons/sun-dark.svg";
import moonIconDark from "../../assets/icons/moon-dark.svg";
import Switch from "../form/switch/Switch";
import { getUserThemePref } from "../../helpers/helpers";

export default function ThemeSwitch({ onThemeChange }) {
  const isDark = getUserThemePref();

  return (
    <ThemeSwitchPane>
      <ThemeIcon src={isDark ? sunIconLight : sunIconDark} alt="" />
      <Switch initialState={!isDark} onClick={onThemeChange} />
      <ThemeIcon src={isDark ? moonIconLight : moonIconDark} alt="" />
    </ThemeSwitchPane>
  );
}
