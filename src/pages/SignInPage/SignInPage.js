import { Link } from "react-router-dom";
import logo from "../../assets/img/logoSign.svg"
import BlueButton from "../../assets/styles/BlueButton";
import SignContainer from "../../assets/styles/SignContainer";
import SignInput from "../../assets/styles/SignInput";

const SignInPage = ()=>{
    return (
        <SignContainer>
            <img src={logo} alt="Just TrackIt!"/>
            <form>
            <div>
                <SignInput type={`email`} required/>
                <label>Email</label>
            </div>
            <div>
                <SignInput type={`password`} required/>
                <label>Senha</label>
            </div>
            <BlueButton type={`submit`}>Entrar</BlueButton>
            </form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </SignContainer>
    );
};


export default SignInPage;