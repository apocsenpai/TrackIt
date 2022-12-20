import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../../Contexts/TokenContext";
import { BASE_URL } from "../../../constants/BASE_URL";
import axios from "axios";
import { NoHabitMessage } from "./styled";
import Habit from "../Habit/Habit";
import SkeletonLoading from "../../Common/LoadingPage";
import { useNavigate } from "react-router-dom";
const Habits = () => {
  const { token, setAccumulativeChecks, setCheckedPercent, setTotalTodayList } =
    useContext(TokenContext);
  const [todayList, setTodayList] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
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
      const totalChecks = list.filter((t) => t.done).length;
      setAccumulativeChecks(totalChecks);
      setTotalTodayList(list.length);
      setCheckedPercent(Math.round((totalChecks / list.length) * 100));
    });
    promise.catch((err) => console.log(err.response.date));
  }, []);
  if (!todayList) {
    return <SkeletonLoading width={"100%"} height={"106px"} number={8} />;
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
