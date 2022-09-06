import { Global, ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { darkTheme } from "./theme/default";
import globalStyles from "./theme/global";
import store from "./store/index";

const Root = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Global styles={globalStyles} />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
