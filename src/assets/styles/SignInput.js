import styled from "styled-components";
const SignInput = styled.input`
  width: 303px;
  height: 45px;
  padding-left: 16px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  & ~ label {
    transform: translateY(1rem);
    padding: 0 0.2rem;
    background-color: #fff;
  }
  &:valid ~ label {
    transform: translateY(-50%) scale(0.8);
  }
  &:focus,
  &:hover {
    outline: none;
    border: 1.5px solid #1a73e8;
    & ~ label {
      transform: translateY(-50%) scale(0.8);
      color: #1a73e8;
    }
  }
`;
export default SignInput;