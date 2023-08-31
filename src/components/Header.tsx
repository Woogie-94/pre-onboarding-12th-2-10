import { styled } from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>facebook / react</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #1f2328;
`;
