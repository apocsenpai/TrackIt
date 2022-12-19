import {
  HabitCard,
  HabitTitle,
  HabitSubtitle,
  CheckButton,
  Current,
  Highest,
} from "./styled";
import { BsCheckLg } from "react-icons/bs";
import { useContext, useState } from "react";
import { TokenContext } from "../../../Contexts/TokenContext";
import { BASE_URL } from "../../../constants/BASE_URL";
import axios from "axios";
const Habit = ({ todayHabit }) => {
  const { id, name, done, currentSequence, highestSequence } = todayHabit;
  const { handleCheckHabit, token } = useContext(TokenContext);
  const [isDone, setIsDone] = useState(done);
  function handleClickedHabit(id, done) {
    setIsDone(!isDone);
    const isHabitChecked = done ? "uncheck" : "check";
    const url = `${BASE_URL}habits/${id}/${isHabitChecked}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.post(url, {}, config);
    promise.then(() => handleCheckHabit());
    promise.catch((err) => console.log(err.response.data));
  }
  return (
    <>
      <HabitCard>
        <div>
          <HabitTitle>{name}</HabitTitle>
          <HabitSubtitle>
            Sequência atual: <Current done={done}>{currentSequence} dia(s)</Current>
          </HabitSubtitle>
          <HabitSubtitle>
            Seu recorde:{" "}
            <Highest
              done={done}
              highestEqualCurrent={currentSequence === highestSequence}
            >
              {highestSequence} dia(s)
            </Highest>
          </HabitSubtitle>
        </div>
        <CheckButton onClick={() => handleClickedHabit(id, done)} done={isDone}>
          <BsCheckLg />
        </CheckButton>
      </HabitCard>
    </>
  );
};

export default Habit;
