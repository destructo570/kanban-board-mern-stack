import React from "react";
import { ReactComponent as CheckBoxLight } from "../../../assets/icons/checkbox-light.svg";
import { ReactComponent as CheckBoxDark } from "../../../assets/icons/checkbox-dark.svg";
import { ReactComponent as CheckBoxChecked } from "../../../assets/icons/checkbox-checked.svg";
import { getUserThemePref } from "../../../helpers/helpers";

export default function Checkbox({ state }) {
  const isDark = getUserThemePref();

  return (
    <div>
      {!state && isDark && <CheckBoxLight />}
      {!state && !isDark && <CheckBoxDark />}
      {state && <CheckBoxChecked />}
    </div>
  );
}
