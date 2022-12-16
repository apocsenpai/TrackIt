import { Link } from "react-router-dom";
import styled from "styled-components";
import { accentColor, secondaryColor } from "../../constants/colors";

const NavBarContainer = () => {
  return (
    <NavBar>
      <Link to="/hoje"><p>TrackIt</p></Link>
      <div>
        <img
          src={
            "https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg"
          }
        />
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
  a{
    text-decoration: none;
  }
  p{
    font-family: 'Playball', cursive;
    color: ${secondaryColor};
    font-size: 40px;
  }
  div {
    width: 51px;
    height: 51px;
    overflow: hidden;
    border-radius: 100%;
    img {
      width: 100%;
    }
  }
`;
export default NavBarContainer;
