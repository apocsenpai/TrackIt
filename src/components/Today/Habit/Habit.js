import { HabitCard, HabitTitle, HabitSubtitle, CheckButton } from "./styled";
import { BsCheckLg } from "react-icons/bs";
const Habit = () => {
  return (
    <HabitCard>
      <div>
        <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
        <HabitSubtitle>Sequência atual: 3 dias</HabitSubtitle>
        <HabitSubtitle>Seu recorde: 5 dias</HabitSubtitle>
      </div>
      <CheckButton>
        <BsCheckLg />
      </CheckButton>
    </HabitCard>
  );
};

export default Habit;
