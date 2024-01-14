import { styled } from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";
import CloudBg from "./../assets/Cloud.png";

export const WeatherContainer = styled.div<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "#ffffff" : "#ffb838")};
  display: flex;
  gap: 50px;
  align-items: center;
`;

export const CloudImg = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${CloudBg});
  background-size: cover;
`;

export const Heading2 = styled.h2``;
export const Temperature = styled.p``;
