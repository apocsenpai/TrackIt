import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { MainContainer } from "./styled";
import "../../assets/styles/calendar.css";
import dayjs from "dayjs";
import { TokenContext } from "../../Contexts/TokenContext";
import { BASE_URL } from "../../constants/BASE_URL";
import axios from "axios";
import SkeletonLoading from "../../components/Common/LoadingPage";
import styled from "styled-components";
import { weekDays } from "../../constants/weekDays";
import { accentColor, secondaryColor, textColor } from "../../constants/colors";
const HistoryPage = () => {
  const [value, onChange] = useState(dayjs().$d);
  const locale = "pt-BR";
  const [dailyHabitsList, setDailyHabitsList] = useState(null);
  const [showDisplayHabit, setShowDisplayHabit] = useState(null);
  const { token } = useContext(TokenContext);
  console.log(showDisplayHabit);
  useEffect(() => {
    const url = `${BASE_URL}habits/history/daily`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, config)
      .then((res) => setDailyHabitsList(res.data))
      .catch((err) => console.log(err.response.data.message));
  }, []);
  function isHabitDay(completeDay) {
    return dailyHabitsList.find((d) => completeDay === d.day);
  }
  return (
    <>
      <MainContainer>
        <section>
          <h2>Histórico</h2>
        </section>
        {!dailyHabitsList ? (
          <SkeletonLoading width={"335px"} height={"300px"} />
        ) : (
          <Calendar
            onChange={onChange}
            value={value}
            locale={locale}
            formatDay={(locale, date) => {
              const day = dayjs(date).format("DD");
              const completeDay = dayjs(date).format("DD/MM/YYYY");

              return (
                <CalendarDay isHabitDay={isHabitDay(completeDay)}>
                  {day}
                </CalendarDay>
              );
            }}
            onClickDay={(date) => {
              const completeDay = dayjs(date).format("DD/MM/YYYY");
              const habitDay = isHabitDay(completeDay);
              if (!habitDay) {
                return;
              } else {
                setShowDisplayHabit(habitDay);
              }
            }}
          />
        )}
        {showDisplayHabit && (
          <DisplayHabit
            dayHabit={showDisplayHabit}
            setShowDisplayHabit={setShowDisplayHabit}
          />
        )}
      </MainContainer>
    </>
  );
};

const DisplayHabit = ({ dayHabit, setShowDisplayHabit }) => {
  const { day, habits } = dayHabit;
  return (
    <Display onClick={() => setShowDisplayHabit(null)}>
      <Modal>
        <p>{day}</p>
        <ul>
          {habits.map(({ name, weekDay, done, id }) => {
            return (
              <HabitCard key={id} done={done}>
                <HabitTitle>{name}</HabitTitle>
                <ButtonGroup>
                  {weekDays.map(({ id, acronym }) => (
                    <WeekDay key={id} isSelected={id === weekDay}>
                      {acronym}
                    </WeekDay>
                  ))}
                </ButtonGroup>
              </HabitCard>
            );
          })}
        </ul>
      </Modal>
    </Display>
  );
};

const CalendarDay = styled.div`
  width: 100%;
  height: 100%;
  ${({ isHabitDay }) => {
    if (!isHabitDay) {
      return "";
    } else {
      const { habits } = isHabitDay;
      return `background-color: ${
        habits.some((h) => !h.historyId) ? "#ea5766" : "#8cc654"
      }`;
    }
  }};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isHabitDay }) => isHabitDay && "cursor: pointer"};
`;
const WeekDay = ({ children, isSelected }) => {
  return (
    <>
      <DayButton isSelected={isSelected}>{children}</DayButton>
    </>
  );
};
const Display = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
  background-color: ${secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 400px;
  border-radius: 20px;
  padding: 20px;
  & > p {
    color: ${accentColor};
    font-size: 23px;
    margin-bottom: 20px;
  }
  &>ul{
    overflow: scroll;
  }
`;
const HabitCard = styled.li`
  min-width: 280px;
  min-height: 91px;
  border-radius: 5px;
  background-color: ${({ done }) => (done ? "#8cc6544D" : "#ea57664D")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;
const DayButton = styled.button`
  background-color: ${({ isSelected }) =>
    isSelected ? "#CFCFCF" : secondaryColor};
  border: 1px solid ${({ isSelected }) => (isSelected ? "#CFCFCF" : "#d5d5d5")};
  border-radius: 5px;
  color: ${({ isSelected }) => (isSelected ? secondaryColor : "#dbdbdb")};
  height: 30px;
  width: 30px;
  font-size: 20px;
`;
const HabitTitle = styled.h3`
  font-size: 20px;
  color: ${textColor};
  margin-bottom: 10px;
`;
export default HistoryPage;
