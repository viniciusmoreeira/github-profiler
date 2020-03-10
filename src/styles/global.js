import { createGlobalStyle } from "styled-components";
import bg from "../images/background.png";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
  background: url(${bg}) no-repeat center left/ cover;
  background-color: #000;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
