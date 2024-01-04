import { styled } from "styled-components";

import NotFoundImage from "./../assets/NotFound.png";

export const ImageContainer = styled.div`
  background-image: url(${NotFoundImage});
  width: 600px;
  height: 80vh;
  background-size: cover;
  background-position: center;
`;

export const NotFoundContainer = styled.div`
  background-color: blue;
  width: 600px;
  height: 80vh;
  background-size: cover;
  background-position: center;
`;
