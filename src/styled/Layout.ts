import { createGlobalStyle } from "styled-components";

import BlackBg from "./../assets/BlackBg.png";
// import LightBg from "./../assets/LightBg.png";
// import BlackBg from "./../assets/darktheme.png";
import LightBg from "./../assets/NICEBG.png";

export const GlobalStyle = createGlobalStyle<{ $isToggled: boolean }>`
  body {
    background-image: url(${(props) => (props.$isToggled ? LightBg : BlackBg)});
    background-size: cover;
    background-attachment: fixed;
  }
`;
