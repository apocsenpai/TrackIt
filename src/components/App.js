import HabitsPage from "../pages/HabitsPage/HabitsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TodayPage from "../pages/TodayPage/TodayPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import { TokenContext } from "../Contexts/TokenContext";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");

  function handleToken(userToken) {
    setToken(userToken);
  }
  return (
    <TokenContext.Provider value={{ token, handleToken }}>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </Router>
    </TokenContext.Provider>
  );
}

export default App;
