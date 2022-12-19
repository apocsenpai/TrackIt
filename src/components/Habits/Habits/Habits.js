import Habit from "../Habit/Habit";
import { TokenContext } from "../../../Contexts/TokenContext";
import { BASE_URL } from "../../../constants/BASE_URL";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { HabitListContext } from "../../../Contexts/HabitListContext";

const Habits = () => {
  const { token , todayList } = useContext(TokenContext);
  const { updateHabitList } = useContext(HabitListContext);
  const [habitList, setHabitList] = useState(null);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${BASE_URL}/habits`;
    const promise = axios.get(url, config);
    promise.then((res) => setHabitList(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, [updateHabitList]);
  if (!habitList) {
    return <></>;
  }
  return (
    <ul>
      {!habitList.length ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        habitList.map(({ id, name, days }) => (
          <Habit key={id} id={id} name={name} days={days} />
        ))
      )}
    </ul>
  );
};

export default Habits;
