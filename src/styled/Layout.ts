import { createGlobalStyle } from "styled-components";
import BlackBg from "./../assets/BlackBg.png";

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${BlackBg});
    background-size: cover;
    background-attachment: fixed;
  }
`;
