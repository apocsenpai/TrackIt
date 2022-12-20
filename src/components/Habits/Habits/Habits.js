import Habit from "../Habit/Habit";
import { TokenContext } from "../../../Contexts/TokenContext";
import { BASE_URL } from "../../../constants/BASE_URL";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { HabitListContext } from "../../../Contexts/HabitListContext";
import SkeletonLoading from "../../Common/LoadingPage";
import { useNavigate } from "react-router-dom";

const Habits = () => {
  const { token } = useContext(TokenContext);
  const { updateHabitList } = useContext(HabitListContext);
  const [habitList, setHabitList] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if(!token){
      navigate("/");
      return;
    }
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
    return <SkeletonLoading width={'100%'} height={"106px"} number={8}/>
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
