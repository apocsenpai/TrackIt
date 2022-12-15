import styled from "styled-components";

const BlueButton = styled.button`
  width: 303px;
  height: 45px;
  border-radius: 3px;
  background-color: #52B6FF;
  color: #fff;
  border: 1px solid transparent;
  transition: 150ms linear;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export default BlueButton;