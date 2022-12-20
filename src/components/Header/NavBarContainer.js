import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { accentColor, secondaryColor } from "../../constants/colors";
import { TokenContext } from "../../Contexts/TokenContext";
import { IoMdExit } from "react-icons/io";
const NavBarContainer = () => {
  const { userImage, handleUser } = useContext(TokenContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  function logOffUser() {
    const confirmLogOff = window.confirm("Tem certeza que deseja sair?");
    if (confirmLogOff) {
      localStorage.removeItem("user");
      navigate("/");
    }
  }
  return (
    <>
      {pathname === "/" || pathname === "/cadastro" ? (
        ""
      ) : (
        <NavBar>
          <Link to="/hoje">
            <p>TrackIt</p>
          </Link>
          <div>
            <img src={userImage} />
          </div>
          <button onClick={logOffUser}>
            <IoMdExit size="30px" />
          </button>
        </NavBar>
      )}
    </>
  );
};

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 1.15rem;
  background-color: ${accentColor};
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 4px 4px 0px #00000026;
  z-index: 1;
  a {
    text-decoration: none;
  }
  p {
    font-family: "Playball", cursive;
    color: ${secondaryColor};
    font-size: 40px;
  }
  div {
    width: 51px;
    height: 51px;
    overflow: hidden;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 51px;
      object-fit: cover;
    }
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${secondaryColor};
    transition: 150ms linear;
    &:hover {
      color: #aaa;
    }
  }
`;
export default NavBarContainer;
