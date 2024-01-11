import styled from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";

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
  color: ${(props) =>
    props.$istoggled ? "rgba(217, 217, 217, 0.5)" : "#3e4245"};
  background-color: ${(props) =>
    props.$istoggled ? "#94b0c2" : "rgba(217, 217, 217, 0.5)"};
`;
export const InputAndButtonContainer = styled.div<ToggleContainerProps>`
  display: flex;
  flex-direction: column;
  /* background-color: ${(props) =>
    props.$istoggled ? "#94b0c2a6" : "rgba(217, 217, 217, 0.5)"}; */
  border: white 3px solid;
  align-items: center;
  height: 50vh;
  width: 260px;
  border-radius: 4%;
  margin-top: 30px;
  margin-left: 30px;
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
  padding: 10px 99px;
  margin-bottom: 15px;
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
export const StyledButtonContainer = styled.div`
  display: flex;
`;
export const StyledButtonAlternative = styled.button`
  font-weight: bolder;
  background-color: rgba(217, 217, 217, 0.5);
  border: none;
  margin-top: 100px;
  padding: 10px 15px;
  border-radius: 10px;
  border: white 3px solid;
  margin-left: 15px;
  font-size: 15px;
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
  color: ${(props) => (props.$istoggled ? "#000000" : "#94b0c2")};
  font-size: 16px;
`;

export const Heading3Black = styled.h3<ToggleContainerProps>`
  display: flex;
  margin-bottom: 0;
  color: ${(props) => (props.$istoggled ? "#000000" : "#94b0c2")};
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
  border-radius: 10px;
  background-color: rgba(217, 217, 217, 0.5);
  margin-top: 15px;
  width: 300px;
  min-height: 25vh; // Minsta höjd, men kan bli större beroende på innehåll
  flex-grow: 1; // Låter komponenten expandera och fylla tillgängligt utrymme
  border: #94b0c2 3px solid;
  margin-bottom: 15px;
`;

export const InfoDiv = styled.div`
  display: flex;
  margin-top: 3px;
  border-bottom: 1px solid white;
`;
