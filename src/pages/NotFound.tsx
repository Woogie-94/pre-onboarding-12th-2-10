import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { PATH_ROOT } from "../constants/path";

const NotFound = () => {
  return (
    <Wrapper>
      <h1>Not Found</h1>
      <Link to={PATH_ROOT}>메인 화면으로 가기</Link>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
