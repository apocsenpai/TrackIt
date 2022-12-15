import styled from "styled-components";

const SignContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    padding-top: 4rem;
    img{
        margin-bottom: 2rem;
    }
    div {
        margin-bottom: 10px;
    position: relative;
    label {
      position: absolute;
      left: 16px;
      color: #afafaf;
      font-size: 18px;
      pointer-events: none;
      transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  a{
    color: #52B6FF;
    font-size: 14px;
    margin-top: 1.5rem;
  }
`;

export default SignContainer;
