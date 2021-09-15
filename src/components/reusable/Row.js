import styled from 'styled-components';

export default function Row({ children }) {
  return <StyledRow>{children}</StyledRow>;
}

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;
