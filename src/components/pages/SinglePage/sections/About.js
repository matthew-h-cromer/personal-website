import styled from 'styled-components';
// Custom Components
import Section from '../../../reusable/Section';
import Blob from '../../../reusable/Blob';

export default function About() {
  return (
    <Section id='about'>
      <Blob pathIndex={1} />
      <Content>
        <ContentTitle>About</ContentTitle>
        <P>
          Have you ever seen those car commercials where there's a bunch of <b>robots</b>{' '}
          welding panels onto cars? My early career was spent designing things like that.
        </P>
        <P>
          Not long after, I got involved with a small business and used those skills to{' '}
          <b>transform</b> it from a heat exchanger <i>distributor</i> into a heat exchanger{' '}
          <i>manufacturer</i>.
        </P>
        <P>
          Because it was a small business, I wore many hats. This was when software became a
          medium for improving the business and I was finally{' '}
          <b>awakened to my passion for software</b>. I began teaching myself to code and
          reading books about software (I highly recommend{' '}
          <A
            href='https://www.amazon.com/Life-3-0-Being-Artificial-Intelligence/dp/0141981806/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1631851323&sr=8-1'
            target='_blank'>
            Life 3.0
          </A>
          !)
        </P>
        <P>
          I'm extremely proud of what I've learned and accomplished since my epiphany. I've
          integrated <b>information systems</b> on Ford assembly lines, built an MRP{' '}
          <b>web application</b>, and currently serve an incredibly talented software team as{' '}
          <b>product owner</b>.
        </P>
        <P>I'm so excited for what the future holds. Onwards.</P>
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
const P = styled.p`
  margin: 0.5rem 0;
`;
const A = styled.a`
  color: black;

  &:hover {
    color: #00b899;
  }
`;
