import HabitsPage from "../pages/HabitsPage/HabitsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TodayPage from "../pages/TodayPage/TodayPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import { TokenContext } from "../Contexts/TokenContext";
import { useState } from "react";
import NavBarContainer from "./Header/NavBarContainer";
import MenuContainer from "./Footer/MenuContainer";

function App() {
  const [token, setToken] = useState("");
  const [userImage, setUserImage] = useState("");
  const [checkedPercent, setCheckedPercent] = useState(0);
  const [accumulativeChecks, setAccumulativeChecks] = useState(0);
  const [totalTodayList, setTotalTodayList] = useState(0);
  function handleToken(userToken) {
    setToken(userToken);
  }
  function handleUserImage(image) {
    setUserImage(image);
  }

  function handleCheckedPercent(localCheck) {
    const localAccumulativeChecks = accumulativeChecks+localCheck;

    setAccumulativeChecks(localAccumulativeChecks);
    setCheckedPercent(Math.round(((localAccumulativeChecks) / totalTodayList) * 100));
  }

  return (
    <TokenContext.Provider
      value={{
        token,
        handleToken,
        userImage,
        handleUserImage,
        checkedPercent,
        handleCheckedPercent,
        setAccumulativeChecks,
        setCheckedPercent,
        setTotalTodayList
      }}
    >
      <Router>
        {token && <NavBarContainer />}
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
        {token && <MenuContainer />}
      </Router>
    </TokenContext.Provider>
  );
}

export default App;
