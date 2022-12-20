import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logoSign.svg";
import BlueButton from "../../components/Common/BlueButton";
import SignContainer from "../../components/Common/SignContainer";
import SignInput from "../../components/Common/SignInput";
import { ThreeDots } from "react-loader-spinner";
import { secondaryColor } from "../../constants/colors";
import { BASE_URL } from "../../constants/BASE_URL";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../Contexts/TokenContext";
const SignInPage = () => {
  const { handleUser } = useContext(TokenContext);
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const serializedUserData = localStorage.getItem("user");
    const localUser = JSON.parse(serializedUserData);
    if (localUser) {
      handleUser(localUser);
      navigate("/hoje");
    }
  }, []);
  function handleSignInForm(e) {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  }
  function loginUser(e) {
    e.preventDefault();
    setIsLoading(!isLoading);
    const url = `${BASE_URL}auth/login`;
    const body = signInForm;
    const promise = axios.post(url, body);
    promise.then((res) => {
      navigate("/hoje");
      handleUser(res.data);
      const serializedUserData = JSON.stringify(res.data);
      localStorage.setItem("user", serializedUserData);
    });
    promise.catch((err) => {
      alert("Usuário ou Senha inválidos! Por favor, tente novamente.");
      console.log(err);
      setIsLoading(false);
    });
  }
  return (
    <SignContainer>
      <img src={logo} alt="Just TrackIt!" />
      <form onSubmit={loginUser}>
        <div>
          <SignInput
            type={`email`}
            onChange={handleSignInForm}
            value={signInForm.email}
            name="email"
            placeholder=""
            disabled={isLoading}
            data-test="email-input"
            required
          />
          <label>email</label>
        </div>
        <div>
          <SignInput
            type={`password`}
            onChange={handleSignInForm}
            value={signInForm.password}
            name="password"
            placeholder=""
            disabled={isLoading}
            data-test="password-input"
            required
          />
          <label>senha</label>
        </div>
        <BlueButton type={`submit`} disabled={isLoading} data-test="login-btn">
          {isLoading ? (
            <ThreeDots
              height="30"
              width="50"
              color={secondaryColor}
              ariaLabel="three-dots-loading"
            />
          ) : (
            "Entrar"
          )}
        </BlueButton>
      </form>
      <Link to="/cadastro" data-test="signup-link">Não tem uma conta? Cadastre-se!</Link>
    </SignContainer>
  );
};

export default SignInPage;
