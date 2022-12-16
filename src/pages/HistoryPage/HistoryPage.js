import NavBarContainer from "../../components/Header/NavBarContainer";
import MenuContainer from "../../components/Footer/MenuContainer";
import { MainContainer } from "./styled";
const HistoryPage = () => {
  return (
    <>
      <NavBarContainer />
      <MainContainer>
        <section>
          <h2>Histórico</h2>
        </section>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </MainContainer>
      <MenuContainer />
    </>
  );
};

export default HistoryPage;
