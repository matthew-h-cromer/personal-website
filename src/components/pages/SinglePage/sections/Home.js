import styled from 'styled-components';
// Custom Components
import Section from '../../../reusable/Section';
import Blob from '../../../reusable/Blob';
import Social from '../../../reusable/Social';

export default function Home() {
  return (
    <Section id='home'>
      <Blob pathIndex={0} />
      <Content>
        <Hi>Hi, I'm Matthew</Hi>
        <TextContainer>
          <p>
            Currently, as <b>Product Owner</b> at{' '}
            <A href='https://www.mitutoyo-rda.com/' target='_blank'>
              Mitutoyo Research & Development
            </A>
            , I lead a talented team in building next generation vision metrology software.
          </p>
          <p>
            I'm interested in web development, manufacturing, commerce, and blockchain
            technologies.
          </p>
        </TextContainer>
        <Social />
      </Content>
    </Section>
  );
}
const Content = styled.div`
  text-align: center;
`;
const Hi = styled.p`
  width: fit-content;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 300;
  color: black;
  border-bottom: 8px solid black;
`;
const TextContainer = styled.div`
  padding: 1.5rem;
  max-width: 500px;
  text-align: justify;
  font-weight: 400;
`;
const A = styled.a`
  color: black;

  &:hover {
    color: #00b899;
  }
`;
