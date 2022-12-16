import styled from "styled-components";
import { backgroundColor, baseColor, secondaryColor } from "../../constants/colors";
const SignInput = styled.input`
  width: 303px;
  height: 45px;
  padding-left: 16px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  & ~ label {
    transform: translateY(0.8rem);
    padding: 0 0.2rem;
    background-color: ${secondaryColor};
  }
  &:not(:placeholder-shown) ~ label {
    transform: translateY(-50%) scale(0.8);
  }
  &:focus,
  &:hover {
    outline: none;
    border: 1.5px solid ${baseColor};
    & ~ label {
      transform: translateY(-50%) scale(0.8);
      color: ${baseColor};
    }
  }
  &:disabled{
    border: 1px solid #D4D4D4;
    background-color: ${backgroundColor};
  }
`;
export default SignInput;