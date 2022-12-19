import styled from "styled-components";
import { accentColor, backgroundColor } from "../../constants/colors";

export const MainContainer = styled.div`
  margin-top: 70px;
  padding: 30px 18px 100px 18px;
  width: 100%;
  background-color: ${backgroundColor};
  min-height: 90vh;
  section {
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
`;

export const Subtitle = styled.p`
  margin-top: 5px;
  font-size: 18px;
  color: ${({ checkedPercent }) => (!checkedPercent ? "#bababa" : "#8FC549")};
`;
