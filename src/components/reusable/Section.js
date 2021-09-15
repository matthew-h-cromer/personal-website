import styled from 'styled-components';

export default function Section({ id, children }) {
  return <StyledSection id={id}>{children}</StyledSection>;
}

const StyledSection = styled.section`
  position: relative;
  scroll-snap-align: start;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  height: calc(var(--vh, 1vh) * 100);
`;
