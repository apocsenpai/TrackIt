import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { baseColor, secondaryColor } from "../../constants/colors";
import { useContext } from "react";
import { TokenContext } from "../../Contexts/TokenContext";

const MenuContainer = () => {
  const { checkedPercent } = useContext(TokenContext);
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/" || pathname === "/cadastro" ? (
        ""
      ) : (
        <Menu>
          <Link to="/habitos">Hábitos</Link>
          <div>
            <Link to="/hoje">
              <div>
                <CircularProgressbar
                  value={checkedPercent}
                  text={`Hoje`}
                  strokeWidth={11}
                  styles={buildStyles({
                    pathTransitionDuration: 0.6,
                    pathColor: `${secondaryColor}`,
                    textColor: `${secondaryColor}`,
                    trailColor: "transparent",
                    textSize: "24px",
                  })}
                />
              </div>
            </Link>
          </div>
          <Link to="/historico">Histórico</Link>
        </Menu>
      )}
    </>
  );
};

const Menu = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 4.25rem;
  background-color: ${secondaryColor};
  display: flex;
  padding: 0px 31px;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  a {
    text-decoration: none;
    color: ${baseColor};
    font-size: 18px;
  }
  & > div {
    position: relative;
    width: 100%;
    align-self: stretch;
    display: flex;
    justify-content: center;
    a {
      position: absolute;
      bottom: 10px;

      div {
        background-color: ${baseColor};
        width: 91px;
        height: 91px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
      }
    }
  }
`;

export default MenuContainer;
