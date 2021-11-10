import styled from 'styled-components';
// Custom Components
import Section from '../../../reusable/Section';
import Blob from '../../../reusable/Blob';

export default function Work() {
  const jobs = [
    {
      title: 'Product Owner',
      company: 'Mitutoyo Research & Development',
      companyLink: 'https://www.mitutoyo-rda.com/',
      dates: 'Jan 2021 - Now',
      description: (
        <>
          Lead a high performance software team in developing next generation vision metrology
          software.
        </>
      ),
    },
    {
      title: 'Full Stack Developer / Product Owner',
      company: 'Raven Heat Transfer',
      dates: 'Sep 2019 - Now',
      description: (
        <>
          Built an elegant web application for the management of B2C manufacturing companies.
        </>
      ),
    },
    {
      title: 'Controls Engineer',
      company: 'Redviking',
      companyLink: 'https://www.redviking.com/',
      dates: 'Nov 2018 - Sep 2019',
      description: (
        <>
          Integrated a proprietary "error proofing" information system on Ford assembly lines.
        </>
      ),
    },
    {
      title: 'Mechanical Engineer',
      company: 'Raven Heat Transfer',
      dates: 'Jan 2017 - Nov 2018',
      description: (
        <>Transformed a heat exchanger distributor into a heat exchanger manufacturer.</>
      ),
    },
  ];

  return (
    <Section id='work'>
      <Blob pathIndex={2} />
      <Content>
        <ContentTitle>Work</ContentTitle>
        {jobs.map((job, index) => (
          <>
            <JobCard {...job} />
            {index < jobs.length - 1 && <Hr />}
          </>
        ))}
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
const Hr = styled.hr`
  margin: 0.5rem 0;
  border: 1px solid lightgrey;
`;

const JobCard = ({ title, company, companyLink, dates, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Company href={companyLink} target='_blank'>
        @{company}
      </Company>
      <Description>{description}</Description>
      <Dates>{dates}</Dates>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 0;
  box-sizing: border-box;
`;
const Title = styled.p`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
`;
const Company = styled.a`
  display: block;
  width: fit-content;
  font-size: 0.75rem;
  margin: 0 0 0.2rem 0;
  padding: 0px;
  text-decoration: none;
  color: black;

  ${({ href }) =>
    href
      ? `&:hover {
    color: #00b899;
  }`
      : null}
`;
const Description = styled.p`
  font-size: 0.95rem;
  margin: 0;
`;
const Dates = styled.p`
  font-size: 0.8rem;
  line-height: 1.7rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
`;
