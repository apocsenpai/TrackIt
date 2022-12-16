import { ButtonGroup, DayButton, DeleteIcon, HabitCard, HabitTitle } from "./styled";
import { BsTrash } from "react-icons/bs";

const Habit = () => {
  return (
    <HabitCard>
      <DeleteIcon><BsTrash /></DeleteIcon>
      <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
      <ButtonGroup>
        <DayButton>D</DayButton>
        <DayButton>S</DayButton>
        <DayButton>T</DayButton>
        <DayButton>Q</DayButton>
        <DayButton>Q</DayButton>
        <DayButton>S</DayButton>
        <DayButton>S</DayButton>
      </ButtonGroup>
    </HabitCard>
  );
};

export default Habit;
