import { styled } from "styled-components";
import CloudBg from "./../assets/Cloud.png";

export const WeatherContainer = styled.div`
  color: #ffffffeb;
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
