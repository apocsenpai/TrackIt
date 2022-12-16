import { useContext, useState } from "react";
import {
  ButtonGroup,
  CancelButton,
  DayButton,
  FormButtonGroup,
  HabitAddForm,
  Input,
  SaveButton,
} from "./styled";
import { TokenContext } from "../../../Contexts/TokenContext";
import { weekDays } from "../../../constants/weekDays";
import { BASE_URL } from "../../../constants/BASE_URL";
import axios from "axios";
import { HabitListContext } from "../../../Contexts/HabitListContext";
import { ThreeDots } from "react-loader-spinner";
import { secondaryColor } from "../../../constants/colors";
const NewHabit = ({
  handleButtonAddHabit,
  addSelectedDays,
  selectedDays,
  habitTitle,
  setHabitTitle,
}) => {
  const { token } = useContext(TokenContext);
  const { handleUpdateList } = useContext(HabitListContext);
  const [isLoading, setIsLoading] = useState(false);

  function handleHabitAddForm(e) {
    e.preventDefault();
    if (!selectedDays.length) {
      alert("Selecione pelo menos 1 dia!");
      return;
    }
    setIsLoading(!isLoading);
    const body = {
      name: habitTitle,
      days: selectedDays,
    };
    const url = `${BASE_URL}habits`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.post(url, body, config);
    promise.then((res) => {
      handleButtonAddHabit();
      handleUpdateList();
      setHabitTitle('');
      addSelectedDays(null);
    });
    promise.catch((err) => {
      setIsLoading(false);
      alert("Não foi possível cadastrar o hábito. Por favor, tente novamente!");
    });
  }
  return (
    <HabitAddForm onSubmit={handleHabitAddForm}>
      <Input
        type={`text`}
        value={habitTitle}
        onChange={(e) => setHabitTitle(e.target.value)}
        disabled={isLoading}
        placeholder="nome do hábito"
        required
      />
      <ButtonGroup>
        {weekDays.map(({ id, acronym }) => (
          <Day
            key={id}
            addSelectedDays={addSelectedDays}
            isSelected={selectedDays.includes(id)}
            id={id}
            disabled={isLoading}
          >
            {acronym}
          </Day>
        ))}
      </ButtonGroup>
      <FormButtonGroup>
        <CancelButton onClick={handleButtonAddHabit} disabled={isLoading}>
          Cancelar
        </CancelButton>
        <SaveButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots
              height="30"
              width="50"
              color={secondaryColor}
              ariaLabel="three-dots-loading"
            />
          ) : (
            "Salvar"
          )}
        </SaveButton>
      </FormButtonGroup>
    </HabitAddForm>
  );
};

const Day = ({ id, children, addSelectedDays, isSelected }) => {
  return (
    <>
      <DayButton isSelected={isSelected} onClick={() => addSelectedDays(id)}>
        {children}
      </DayButton>
    </>
  );
};

export default NewHabit;
