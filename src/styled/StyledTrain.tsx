import styled, { keyframes } from "styled-components";
import greyTrain from "./../assets/greyTrain.png";

const moveTrain = keyframes`
  0%, 100% {
    transform: translateX(-10vw); 
  }
  50% {
    transform: translateX(180%);
  }
`;

export const Train = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${greyTrain});
  background-size: cover;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  animation: ${moveTrain} 10s linear infinite;
`;
