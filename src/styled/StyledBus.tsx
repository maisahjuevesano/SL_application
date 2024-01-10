import styled, { keyframes } from "styled-components";
import trainImage from "./../assets/BusPng.png";

const moveBus = keyframes`
  0%, 100% {
    transform: translateX(10vw); 
  }
  50% {
    transform: translateX(-180%);
  }
`;

export const Bus = styled.div`
  width: 50px;
  height: 40px;
  background-image: url(${trainImage});
  background-size: cover;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  animation: ${moveBus} 10s linear infinite;
`;
