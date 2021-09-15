import styled from 'styled-components';
// Custom Components
import Section from '../../../reusable/Section';
import Blob from '../../../reusable/Blob';

export default function AboutMe() {
  return (
    <Section id='about'>
      <Blob pathIndex={1} />
      <Content>
        <ContentTitle>About</ContentTitle>
        <p>
          I studied mechanical engineering at Kettering University and spent my early career
          designing tooling and automated machinery.
        </p>
        <p>
          I used these skills to design the processes and products necessary to transform a
          heat exchanger distributor into a heat exchanger manufacturer.
        </p>
        <p>
          As software became a medium for improving the efficiency of the business, I was
          awakened to my own passion. I felt an immense sense of purpose and a heightened
          ability to <b>effect good change on the world</b>. I knew then I was meant to build
          software and I've never looked back.
        </p>
        <p>
          Since then, I've integrated <b>information systems</b> on Ford assembly lines, built
          an MRP <b>web application</b>, and currently serve an incredibly talented software
          team as Product Owner.
        </p>
        <p>
          My recent professional passion has been <b>blockchain</b> technologies. I believe the
          potential to move us towards a brighter future is incredible.
        </p>
        <p>
          In my free time, I enjoy hiking, cooking, playing guitar, and working on coding
          projects.
        </p>
      </Content>
    </Section>
  );
}

const Content = styled.div`
  padding: 2rem;
  max-width: 500px;
  text-align: justify;
  font-weight: 400;
  overflow: hidden;
`;
const ContentTitle = styled.h1`
  margin-top: 0;
`;
