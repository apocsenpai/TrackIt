import styled, { keyframes } from "styled-components";

const loading = keyframes`

    0% {
        background-color: #ffffff;
    }
    50%{
        background-color: #c7e0f4;
    }
    100% {
        background-color: #ffffff;
    }

`;

const SkeletonLoading = ({ width, height, number }) => {
  return number ? (
    [...Array(number)].map((s, id) => (
      <StyledSkeleton width={width} height={height} key={id}/>

    ))
  ) : (
    <StyledSkeleton width={width} height={height}/>
  );
};
const StyledSkeleton = styled.li`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  animation: ${loading} 1000ms ease-in-out infinite alternate;
  margin-bottom: 20px;
`;

export default SkeletonLoading;
