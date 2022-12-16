import { ButtonGroup, CancelButton, DayButton, FormButtonGroup, HabitInputGroup, Input, SaveButton } from "./styled";

const NewHabit = () => {
  return (
    <HabitInputGroup>
        <Input type={`text`} placeholder="nome do hábito"/>
        <ButtonGroup>
            <DayButton>D</DayButton>
            <DayButton>S</DayButton>
            <DayButton>T</DayButton>
            <DayButton>Q</DayButton>
            <DayButton>Q</DayButton>
            <DayButton>S</DayButton>
            <DayButton>S</DayButton>
        </ButtonGroup>
        <FormButtonGroup>
            <CancelButton>Cancelar</CancelButton>
            <SaveButton>Salvar</SaveButton>
        </FormButtonGroup>
    </HabitInputGroup>
  );
};

export default NewHabit;