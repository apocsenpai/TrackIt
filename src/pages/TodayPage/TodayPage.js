import { MainContainer, Subtitle } from "./styled";

import dayjs from "dayjs";
import { weekDays } from "../../constants/weekDays";
import Habits from "../../components/Today/Habits/Habits";
import { useContext } from "react";
import { TokenContext } from "../../Contexts/TokenContext";
const TodayPage = () => {
  const { checkedPercent } = useContext(TokenContext);
  const day = dayjs().$D;
  const month = dayjs().$M + 1;
  const idWeekDay = dayjs().$W;
  function handleWeekDay(idWeekDay) {
    return weekDays.find((w) => w.id === idWeekDay).value;
  }

  return (
    <>
      <MainContainer>
        <section>
          <h2 data-test="today">{`${handleWeekDay(idWeekDay)}, ${day}/${month}`}</h2>
          <Subtitle checkedPercent={checkedPercent} data-test="today-counter">
            {!checkedPercent
              ? `Nenhum hábito concluído ainda`
              : `${checkedPercent}% dos hábitos concluídos`}
          </Subtitle>
        </section>
        <Habits />
      </MainContainer>
    </>
  );
};

export default TodayPage;
