import styled from "styled-components";

export const DeparturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3e4245;
  align-items: center;
  height: 60vh;
  width: 300px;
  border-radius: 4%;
  /* background-color: #2870f0; */
  background-color: #d9d9d9;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  background-color: #d9d9d9;
  border: none;
  padding: 20px 100px;
  border-radius: 15px;
  border: white 3px solid;
  font-size: 16px;
  cursor: pointer;
  /* outline: none; */
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

export const StyledInput = styled.input`
  background-color: #d9d9d9;
  border: none;
  padding: 20px 15px;
  border-radius: 15px;
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

export const Heading2 = styled.h2`
  color: white;
`;

export const Heading3 = styled.h2`
  display: flex;
  color: white;
`;
