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
            I am a creator and problem solver who's transitioned from a rich background in
            mechanical engineering into the world of <b>software</b>.
          </p>
          <p>
            Currently, as <b>Product Owner</b> at Mitutoyo Research & Development, I lead a
            team in building next generation vision metrology software.
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
