import { css } from "@emotion/react";
import normalize from "normalize.css";
const globalStyles = css`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  html,
  body {
    background-color: #21212d;
    font-family: "Open Sans", "Sans-serif";
    color: white;
  }
`;

export default globalStyles;
