import NavBarContainer from "../../components/Header/NavBarContainer";
import MenuContainer from "../../components/Footer/MenuContainer";
import { MainContainer } from "./styled";
import BlueButton from "../../components/Common/BlueButton";
import NewHabit from "../../components/Habits/NewHabit/NewHabit";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import Habits from "../../components/Habits/Habits/Habits";
import { HabitListContext } from "../../Contexts/HabitListContext";
const HabitsPage = () => {
  const [toggleAddHabit, setToggleAddHabit] = useState(false);
  const [updateHabitList, setUpdateHabitList] = useState(false);
  const [selectedDays, setSelectedDay] = useState([]);
  const [habitTitle, setHabitTitle] = useState("");
  function addSelectedDays(id) {
    if (!id) {
      setSelectedDay([]);
      return;
    } else if (selectedDays.includes(id)) {
      const filteredDays = selectedDays.filter((idDay) => idDay !== id);
      setSelectedDay(filteredDays);
      return;
    }
    setSelectedDay([...selectedDays, id]);
  }
  function handleButtonAddHabit() {
    setToggleAddHabit(!toggleAddHabit);
  }
  function handleUpdateList() {
    setUpdateHabitList(!updateHabitList);
  }
  return (
    <HabitListContext.Provider value={{ handleUpdateList, updateHabitList }}>
      <NavBarContainer />
      <MainContainer>
        <section>
          <h2>Meus hábitos</h2>
          <BlueButton onClick={handleButtonAddHabit}>
            <BsPlusLg />
          </BlueButton>
        </section>
        {toggleAddHabit && (
          <NewHabit
            addSelectedDays={addSelectedDays}
            selectedDays={selectedDays}
            habitTitle={habitTitle}
            setHabitTitle={setHabitTitle}
            handleButtonAddHabit={handleButtonAddHabit}
          />
        )}
        <Habits />
      </MainContainer>
      <MenuContainer />
    </HabitListContext.Provider>
  );
};

export default HabitsPage;
