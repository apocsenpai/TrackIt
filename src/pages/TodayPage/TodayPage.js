import NavBarContainer from "../../components/Header/NavBarContainer";
import MenuContainer from "../../components/Footer/MenuContainer";
import { MainContainer, Subtitle } from "./styled";

import dayjs from "dayjs";
import {weekDays} from "../../constants/weekDays";
import Habits from "../../components/Today/Habits/Habits";
const TodayPage = () => {
  const day = dayjs().$D;
  const month = dayjs().$M+1;
  const idWeekDay = dayjs().$W;
  function handleWeekDay(idWeekDay){
    return weekDays.find((w)=>w.id===idWeekDay).value;
  }
  return (
    <>
      <NavBarContainer />
      <MainContainer>
        <section>
          <h2>{`${handleWeekDay(idWeekDay)}, ${day}/${month}`}</h2>
          <Subtitle>Nenhum hábito concluído ainda</Subtitle>
        </section>
        <Habits/>
      </MainContainer>
      <MenuContainer />
    </>
  );
};

export default TodayPage;
