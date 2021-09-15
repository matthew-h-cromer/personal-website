import styled from 'styled-components';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Work from './sections/Work';
import ScrollIndicators from '../../reusable/ScrollIndicators';

export default function SinglePage() {
  return (
    <>
      <ScrollIndicators />
      <Container id='section-container'>
        <Home />
        <AboutMe />
        <Work />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  overflow-y: scroll;
  overflow-x: none;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;
