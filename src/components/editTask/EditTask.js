import React from "react";

import { EditTaskPane } from "./styles";

export default function AddTask({ children }) {
  return <EditTaskPane>{children}</EditTaskPane>;
}
