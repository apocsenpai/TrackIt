import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../../Contexts/TokenContext";
import { BASE_URL } from "../../../constants/BASE_URL";
import axios from "axios";
import { NoHabitMessage } from "./styled";
import Habit from "../Habit/Habit";
const Habits = () => {
  const { token, isChecked, setCheckedPercent } = useContext(TokenContext);
  const [todayList, setTodayList] = useState(null);
  useEffect(() => {
    const url = `${BASE_URL}habits/today`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(url, config);
    promise.then((res) => {
      const list = res.data;
      setTodayList(list);
      const checkedHabits = list.filter((l) => l.done).length;
      setCheckedPercent((checkedHabits / list.length) * 100);
    });
    promise.catch((err) => console.log(err.response.date));
  }, [isChecked]);
  if (!todayList) {
    return <></>;
  }
  return (
    <ul>
      {!todayList.length ? (
        <NoHabitMessage>
          Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito
          para começar a trackear!
        </NoHabitMessage>
      ) : (
        <>
          {todayList.map((t) => (
            <Habit key={t.id} todayHabit={t} />
          ))}
        </>
      )}
    </ul>
  );
};

export default Habits;
