import { Global, ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { lighTheme, darkTheme } from "./theme/default";
import globalStyles from "./theme/global";

const Root = () => {
  const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setIsDark((prev) => !prev);
  //   }, 1000);
  // }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Global styles={globalStyles} />
        <App />
      </ThemeProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
