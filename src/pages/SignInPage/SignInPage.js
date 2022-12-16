import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logoSign.svg";
import BlueButton from "../../components/Common/BlueButton";
import SignContainer from "../../components/Common/SignContainer";
import SignInput from "../../components/Common/SignInput";
import { ThreeDots } from "react-loader-spinner";
import { secondaryColor } from "../../constants/colors";
import { BASE_URL } from "../../constants/BASE_URL";
import axios from "axios";
import { useContext, useState } from "react";
import { TokenContext } from "../../Contexts/TokenContext";
const SignInPage = () => {
  const {handleToken} = useContext(TokenContext);
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  function handleSignInForm(e) {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();
  function loginUser(e) {
    e.preventDefault();
    setIsLoading(!isLoading);
    const url = `${BASE_URL}auth/login`;
    const body = signInForm;
    const promise = axios.post(url, body);
    promise.then((res) => {
      navigate("/hoje");
      handleToken(res.data.token);
    });
    promise.catch((err) => {
      alert("Usuário ou Senha inválidos! Por favor, tente novamente.");
      console.log(err)
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
            required
          />
          <label>senha</label>
        </div>
        <BlueButton type={`submit`}>
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
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </SignContainer>
  );
};

export default SignInPage;
