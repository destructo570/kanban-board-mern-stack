import React from "react";

import { HeaderPane } from "./styles";

export default function Header({ children }) {
  return (
    <HeaderPane direction="column" width="100%">
      {children}
    </HeaderPane>
  );
}
