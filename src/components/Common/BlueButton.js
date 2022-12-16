import styled from "styled-components";
import { baseColor, secondaryColor } from "../../constants/colors";

const BlueButton = styled.button`
  width: 303px;
  height: 45px;
  border-radius: 3px;
  color: ${secondaryColor};
  background-color: ${baseColor};
  border: 1px solid transparent;
  transition: 150ms linear;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  &:hover {
    opacity: 0.9;
  }
  a {
    text-decoration: none;
    color: ${secondaryColor};
    font-size: 18px;
  }
  &:disabled{
    opacity: 0.7;
  }
  div{
    margin: 0;
  }
`;

export default BlueButton;
