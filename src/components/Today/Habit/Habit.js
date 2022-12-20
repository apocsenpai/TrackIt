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
  const { token, handleCheckedPercent } = useContext(TokenContext);
  const [isDone, setIsDone] = useState(done);
  const [localCurrent, setLocalCurrent] = useState(currentSequence);
  const [localHighest, setLocalHighest] = useState(highestSequence);
  const highestEqualCurrent = localCurrent === localHighest;

  function handleClickedHabit(id) {
    let localCheck = 0;
    const isHabitChecked = isDone ? "uncheck" : "check";
    const url = `${BASE_URL}habits/${id}/${isHabitChecked}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.post(url, {}, config);
    promise.then(() => {
      setIsDone(!isDone);
      //podia ter usado um switch case aqui
      if (!isDone) {
        setLocalCurrent(localCurrent + 1);
        if (highestEqualCurrent) {
          setLocalHighest(localHighest + 1);
        }
        localCheck++;
      } else {
        setLocalCurrent(localCurrent - 1);
        if (highestEqualCurrent) {
          setLocalHighest(localHighest - 1);
        }
        localCheck--;
      }
      handleCheckedPercent(localCheck);
    });
    promise.catch((err) => console.log(err.response.data));
  }
  return (
    <>
      <HabitCard data-test="today-habit-container">
        <div>
          <HabitTitle data-test="today-habit-name">{name}</HabitTitle>
          <HabitSubtitle data-test="today-habit-sequence">
            Sequência atual:{" "}
            <Current done={isDone}>{localCurrent} dia(s)</Current>
          </HabitSubtitle>
          <HabitSubtitle data-test="today-habit-record">
            Seu recorde:{" "}
            <Highest done={isDone} highestEqualCurrent={highestEqualCurrent}>
              {localHighest} dia(s)
            </Highest>
          </HabitSubtitle>
        </div>
        <CheckButton data-test="today-habit-check-btn" onClick={() => handleClickedHabit(id)} done={isDone}>
          <BsCheckLg />
        </CheckButton>
      </HabitCard>
    </>
  );
};

export default Habit;
