import styled from 'styled-components';
import Home from './sections/Home';
import About from './sections/About';
import Work from './sections/Work';
import ScrollIndicators from '../../reusable/ScrollIndicators';
import HamburgerMenu from '../../HamburgerMenu';

export default function SinglePage() {
  return (
    <>
      <ScrollIndicators />
      <HamburgerMenu />
      <Container id='section-container'>
        <Home />
        <About />
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
