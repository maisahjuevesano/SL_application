import styled from "styled-components";

export const DeparturesContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  background-color: #3e4245;
  /* padding: 100px; */
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
  /* padding: 100px; */
  align-items: center;
  height: 40vh;
  width: 400px;
  border-radius: 4%;
`;

export const Button = styled.button`
  background-color: #d9d9d9;
  border: none;
  /* width: 500px;
  height: 50px; */
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

export const Input = styled.input`
  border: white 3px solid;
  padding: 20px;
  border-radius: 15px;
  font-size: 16px;
  margin: 5px 0px;

  &focus {
    border-color: #666;
    outline: none; //tar bort standardfokusglöden
  }
`;

export const Heading2 = styled.h2`
  color: white;
`;

export const Heading3 = styled.h2`
  display: flex;
  color: white;
`;
