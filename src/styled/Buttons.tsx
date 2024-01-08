import { styled } from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainer";

export const ToggleContainer = styled.div<ToggleContainerProps>`
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.toggled ? "#3e4245;" : "#f8ac41;")};
  border-radius: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.toggled ? "flex-end" : "flex-start")};
  cursor: pointer;
`;

export const ToggleKnob = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
`;
