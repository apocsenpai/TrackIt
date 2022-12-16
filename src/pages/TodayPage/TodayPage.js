import NavBarContainer from "../../components/Header/NavBarContainer";
import MenuContainer from "../../components/Footer/MenuContainer";
import { MainContainer, NoHabitMessage, Subtitle } from "./styled";
import Habit from "../../components/Today/Habit/Habit";
import dayjs from "dayjs";
import {weekDays} from "../../constants/weekDays";
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
        <Habit />
        <NoHabitMessage>
          Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito para
          começar a trackear!
        </NoHabitMessage>
      </MainContainer>
      <MenuContainer />
    </>
  );
};

export default TodayPage;
