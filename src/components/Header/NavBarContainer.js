import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { accentColor, secondaryColor } from "../../constants/colors";
import { TokenContext } from "../../Contexts/TokenContext";
const NavBarContainer = () => {
  const { userImage } = useContext(TokenContext);
  return (
    <NavBar>
      <Link to="/hoje">
        <p>TrackIt</p>
      </Link>
      <div>
        <img src={userImage} />
      </div>
    </NavBar>
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
`;
export default NavBarContainer;
