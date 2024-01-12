import styled from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";

export const ToggleContainer = styled.div<ToggleContainerProps>`
  width: 34px;
  height: 15px;
  background-color: ${(props) => (props.$istoggled ? "#ae66c9" : "#002938ab")};
  border-radius: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$istoggled ? "flex-end" : "flex-start")};
  cursor: pointer;
  margin: 3px;
`;

export const ToggleKnob = styled.div<ToggleContainerProps>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.$istoggled ? "#6f5af4ac" : "#ffb838")};
  border-radius: 50%;
  transition: all 0.3s ease;
`;
