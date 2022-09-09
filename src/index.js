import { Global, ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { darkTheme, lighTheme } from "./theme/default";
import globalStyles from "./theme/global";
import store from "./store/index";
import { getUserThemePref, setUserThemePref } from "./helpers/helpers";
import { BrowserRouter } from "react-router-dom";

const Root = () => {
  const [isDark, setIsDark] = useState(getUserThemePref("isDark"));
  const setIsDarkHandler = () => {
    setIsDark((prev) => {
      setUserThemePref(!prev);
      return !prev;
    });
  };
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lighTheme}>
        <Global styles={globalStyles} />
        <BrowserRouter>
          <Provider store={store}>
            <App setIsDark={setIsDarkHandler} />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
