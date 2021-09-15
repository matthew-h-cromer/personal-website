import styled from 'styled-components';
import { GitHub, Linkedin, Mail } from 'react-feather';

export default function Social() {
  const socials = [
    { href: 'https://github.com/matthew-h-cromer', icon: <GitHub /> },
    { href: 'https://www.linkedin.com/in/matthew-h-cromer/', icon: <Linkedin /> },
    { href: 'mailto:matthew.h.cromer@gmail.com', icon: <Mail /> },
  ];

  return (
    <Container>
      {socials.map(social => (
        <Link href={social.href} target='_blank'>
          {social.icon}
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
`;
const Link = styled.a`
  color: black;
  transition-duration: 0.25s;

  &:hover {
    color: #00b899;
  }
`;
