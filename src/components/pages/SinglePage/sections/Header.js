import styled from 'styled-components';

export default function Header() {
  return <StyledHeader></StyledHeader>;
}

const StyledHeader = styled.header`
  position: fixed;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;
const LinkButton = styled.a`
  width: 50px;
`;
