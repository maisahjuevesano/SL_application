import styled from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";

//sök avgångar

export const DeparturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchTravelContainer = styled.div<ToggleContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25vh;
  width: 260px;
  border-radius: 4%;
  color: ${(props) => (props.$istoggled ? "#f8ac41" : "#3e4245")};
  background-color: ${(props) =>
    props.$istoggled ? "#3e4245" : "rgba(217, 217, 217, 0.5)"};
`;
export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(217, 217, 217, 0.5);
  align-items: center;
  height: 25vh;
  width: 260px;
  border-radius: 4%;
  margin-top: 30px;
  margin-left: 40px;
  padding-top: 10px;
`;

export const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(217, 217, 217, 0.5);
  padding: 10px 15px;
  border-radius: 10px;
  border: white 3px solid;
  font-size: 16px;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  font-weight: bolder;
  background-color: rgba(217, 217, 217, 0.5);
  border: none;
  margin-top: 15px;
  padding: 10px 35px;
  border-radius: 10px;
  border: white 3px solid;
  font-size: 16px;
  cursor: pointer;
  transition: background-colour 0.3s ease;

  &:hover {
    background-color: #666;
  }

  &:active {
    background-color: #333;
  }

  &:focus {
    box-shadow: 0 0 0 2px #bbb;
  }
`;

export const Heading2 = styled.h2``;

export const Heading3 = styled.h2<ToggleContainerProps>`
  display: flex;
  color: ${(props) => (props.$istoggled ? "#3e4245" : "#f8ac41")};
  font-size: 16px;
  margin-bottom: 0;
`;

export const Heading3Black = styled.h2<ToggleContainerProps>`
  display: flex;
  font-size: 16px;
  margin-bottom: 0;
  color: ${(props) => (props.$istoggled ? "white" : "#f8ac41")};
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivHeading = styled.div`
  width: 85%;
  text-align: start;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2%;
  background-color: rgba(217, 217, 217, 0.5);
  margin-top: 1%;
  height: 50vh;
  width: 300px;
  color: #000000;
`;
export const InfoDiv = styled.div`
  display: flex;
`;
