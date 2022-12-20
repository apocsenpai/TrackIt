import styled from "styled-components";
import {
  backgroundColor,
  baseColor,
  secondaryColor,
} from "../../../constants/colors";
import BlueButton from "../../Common/BlueButton";
export const HabitAddForm = styled.form`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  background-color: ${secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
  margin-bottom: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 16px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 8px;
  &:focus,
  &:hover {
    outline: none;
    border: 1.5px solid ${baseColor};
  }
  &::placeholder {
    color: #dbdbdb;
  }
  &:disabled {
    border: 1px solid #d4d4d4;
    background-color: ${backgroundColor};
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
  align-self: flex-start;
  margin-bottom: 30px;
`;
export const DayButton = styled.div`
  background-color: ${({ isSelected }) =>
    isSelected ? "#CFCFCF" : secondaryColor};
  border: 1px solid ${({ isSelected }) => (isSelected ? "#CFCFCF" : "#d5d5d5")};
  border-radius: 5px;
  color: ${({ isSelected }) => (isSelected ? secondaryColor : "#dbdbdb")};
  height: 30px;
  width: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const FormButtonGroup = styled(ButtonGroup)`
  margin-bottom: 0px;
  align-self: flex-end;
`;
export const CancelButton = styled(BlueButton)`
  width: 84px;
  height: 35px;
  color: ${baseColor};
  background-color: transparent;
  font-size: 16px;
`;
export const SaveButton = styled(CancelButton)`
  color: ${secondaryColor};
  background-color: ${baseColor};
`;
