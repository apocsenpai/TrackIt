import styled from "styled-components";
import { secondaryColor, textColor } from "../../../constants/colors";
export const HabitCard = styled.div`
  position: relative;
  width: 340px;
  min-height: 91px;
  border-radius: 5px;
  background-color: ${secondaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  margin-bottom: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const HabitTitle = styled.h3`
  font-size: 20px;
  color: ${textColor};
  margin-bottom: 10px;
`;
export const HabitSubtitle = styled.p`
  font-size: 13px;
  color: ${textColor};
`;
export const CheckButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 70px;
  width: 70px;
  background-color: #8FC549;
  border-radius: 5px;
  color: ${secondaryColor};
  font-size: 40px;
`;