import NavBarContainer from "../../components/Header/NavBarContainer";
import MenuContainer from "../../components/Footer/MenuContainer";
import { MainContainer } from "./styled";
import BlueButton from "../../components/Common/BlueButton";
import NewHabit from "../../components/Habits/NewHabit/NewHabit";
import { BsPlusLg } from "react-icons/bs";
import Habit from "../../components/Habits/Habit/Habit";
const HabitsPage = () => {
  return (
    <>
      <NavBarContainer />
      <MainContainer>
        <section>
          <h2>Meus hábitos</h2>
          <BlueButton><BsPlusLg/></BlueButton>
        </section>
        <NewHabit />
        <Habit/>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </MainContainer>
      <MenuContainer />
    </>
  );
};

export default HabitsPage;
