import { Link } from "react-router-dom";
import logo from "../../assets/img/logoSign.svg"
import BlueButton from "../../assets/styles/BlueButton";
import SignContainer from "../../assets/styles/SignContainer";
import SignInput from "../../assets/styles/SignInput";

const SignUpPage = ()=>{
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
            <div>
                <SignInput type={`text`} required/>
                <label>Nome</label>
            </div>
            <div>
                <SignInput type={`foto`} required/>
                <label>Foto</label>
            </div>
            <BlueButton type={`submit`}>Cadastrar</BlueButton>
            </form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </SignContainer>
    );
};


export default SignUpPage;