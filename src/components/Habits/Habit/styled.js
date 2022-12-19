import styled from "styled-components";
import { secondaryColor, textColor } from "../../../constants/colors";
export const HabitCard = styled.li`
  position: relative;
  min-width: 340px;
  min-height: 91px;
  border-radius: 5px;
  background-color: ${secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px;
  margin-bottom: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;
export const DayButton = styled.button`
  background-color: ${({isSelected})=> isSelected ? "#CFCFCF" : secondaryColor};;
  border: 1px solid ${({isSelected})=> isSelected ? "#CFCFCF" : "#d5d5d5"};
  border-radius: 5px;
  color: ${({isSelected})=> isSelected ? secondaryColor : "#dbdbdb"};
  height: 30px;
  width: 30px;
  font-size: 20px;
`;
export const HabitTitle = styled.h3`
  font-size: 20px;
  color: ${textColor};
  margin-bottom: 10px;
`;

export const DeleteIcon = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 6px;
  cursor: pointer;
`;
