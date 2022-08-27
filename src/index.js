import { Global, ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { lighTheme, darkTheme } from "./theme/default";
import globalStyles from "./theme/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={lighTheme}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </>
);
