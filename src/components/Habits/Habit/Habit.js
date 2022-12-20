import {
  ButtonGroup,
  DayButton,
  DeleteIcon,
  HabitCard,
  HabitTitle,
} from "./styled";
import { BsTrash } from "react-icons/bs";
import { weekDays } from "../../../constants/weekDays";
import { HabitListContext } from "../../../Contexts/HabitListContext";
import { useContext } from "react";
import { BASE_URL } from "../../../constants/BASE_URL";
import { TokenContext } from "../../../Contexts/TokenContext";
import axios from "axios";
const Habit = ({ id, name, days, test }) => {
  const { handleUpdateList } = useContext(HabitListContext);
  const { token } = useContext(TokenContext);
  function deleteHabit(id) {
    const confirmDelete = window.confirm(
      "Você realmente quer apagar este hábito?"
    );
    if (!confirmDelete) {
      return;
    }
    const url = `${BASE_URL}habits/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.delete(url, config);
    promise.then((res) => handleUpdateList());
    promise.catch((err) => console.log(err.response.data));
  }
  return (
    <>
      <HabitCard data-test={test}>
        <DeleteIcon
          onClick={() => deleteHabit(id)}
          data-test="habit-delete-btn"
        >
          <BsTrash />
        </DeleteIcon>
        <HabitTitle data-test="habit-name">{name}</HabitTitle>
        <ButtonGroup>
          {weekDays.map(({ id, acronym }) => (
            <Day key={id} isSelected={days.includes(id)}>
              {acronym}
            </Day>
          ))}
        </ButtonGroup>
      </HabitCard>
    </>
  );
};
const Day = ({ children, isSelected }) => {
  return (
    <>
      <DayButton data-test="habit-day" isSelected={isSelected}>
        {children}
      </DayButton>
    </>
  );
};
export default Habit;
