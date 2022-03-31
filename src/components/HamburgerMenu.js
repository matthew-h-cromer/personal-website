import styled from 'styled-components';
import { useState } from 'react';

export default function () {
  const [active, setActive] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setActive(!active)} active={active}>
        <Bar active={active} />
        <Bar active={active} />
        <Bar active={active} />
      </Hamburger>
      <Overlay onClick={() => setActive(!active)} active={active} />
      <Menu active={active}>
        <MenuItem href='#home'>Home</MenuItem>
        <MenuItem href='#about'>About</MenuItem>
        <MenuItem href='#work'>Work</MenuItem>
        {/* <MenuSectionTitle>Projects</MenuSectionTitle>
        <MenuItem href='#dfktools'>DFK Tools</MenuItem>
        <MenuItem href='#mesh'>Mesh</MenuItem> */}
      </Menu>
    </>
  );
}

const Hamburger = styled.div`
  position: fixed;
  top: 2rem;
  right: calc(2rem + 8px);
  cursor: pointer;
  z-index: 3;
  padding: 0.5rem;

  ${({ active }) =>
    // prettier-ignore
    active
      ? 
    `@media (max-width: 768px) {
      right: calc(50% - min(120px, 35%));
      transform: translate(50%);}`
      : 
    'black'};
`;

const Bar = styled.div`
  display: block;
  width: 30px;
  height: 5px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: ${({ active }) => (active ? 'white' : 'black')};
  border-radius: 2.5px;

  &:nth-child(1) {
    transform: ${({ active }) => (active ? 'translateY(10px) rotate(45deg)' : '')};
  }

  &:nth-child(2) {
    opacity: ${({ active }) => (active ? '0' : '1')};
  }

  &:nth-child(3) {
    transform: ${({ active }) => (active ? 'translateY(-10px) rotate(-45deg)' : '')};
  }
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;

  @media (max-width: 768px) {
    display: ${({ active }) => (active ? 'block' : 'none')};
  }
`;

const Menu = styled.div`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  height: ${({ active }) => (active ? '640px' : '0px')};
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 2rem;
  right: calc(2rem + 8px);
  width: 70%;
  height: 70%;
  max-width: 100px;
  max-height: 200px;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;

  @media (max-width: 768px) {
    max-width: 240px;
    max-height: 384px;
    right: 50%;
    transform: translate(50%);
  }
`;

const MenuItem = styled.a`
  color: white;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #00b899;
  }
`;

const MenuSectionTitle = styled.div`
  position: relative;
  top: 50px;
  font-variant: small-caps;
  color: #bababa;
  font-size: 18px;
  margin-bottom: 50px;

  &:after {
    background-color: #bababa;
    position: absolute;
    content: '';
    height: 2px;
    bottom: -2px;
    margin: 0 auto;
    left: -30px;
    right: -30px;
  }
`;
