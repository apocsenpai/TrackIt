import styled from "styled-components";
import {
  accentColor,
  backgroundColor,
  textColor,
} from "../../constants/colors";

export const MainContainer = styled.div`
  margin-top: 70px;
  padding: 30px 18px 100px 18px;
  width: 100%;
  background-color: ${backgroundColor};
  min-height: 90vh;
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    h2 {
      color: ${accentColor};
      font-size: 23px;
    }
    button {
      width: 40px;
      height: 35px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  p {
    color: ${textColor};
    font-size: 18px;
  }
`;
