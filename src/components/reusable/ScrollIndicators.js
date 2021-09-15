import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function ScrollIndicators() {
  const sections = [
    { title: 'home', href: '#home' },
    { title: 'about', href: '#about' },
    { title: 'work', href: '#work' },
  ];

  const [scrolling, setScrolling] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(false);

  useEffect(() => {
    document.getElementById('section-container').addEventListener('scroll', e => {
      if (!scrolling) {
        setScrolling(true);
        setTimeout(() => {
          setScrolling(false);
        }, 1000);
      }

      const viewportHeight = window.innerHeight;
      const scrollPosition = e.target.scrollTop;
      setCurrentSectionIndex(Number.parseInt(scrollPosition / viewportHeight));
    });
  });

  return (
    <>
      {currentSectionIndex > 0 && (
        <CarotTop href={sections[currentSectionIndex - 1].href} scrolling={scrolling}>{`↑   ${
          sections[currentSectionIndex - 1].title
        }   ↑`}</CarotTop>
      )}
      {currentSectionIndex < sections.length - 1 && (
        <CarotBottom
          href={sections[currentSectionIndex + 1].href}
          scrolling={scrolling}>{`↓   ${
          sections[currentSectionIndex + 1].title
        }   ↓`}</CarotBottom>
      )}
    </>
  );
}

const CarotTop = styled.a`
  z-index: 1;

  opacity: ${({ scrolling }) => (scrolling ? '0' : '1')};
  transition-duration: 0.5s;

  position: absolute;
  top: 0.8rem;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;

  cursor: pointer;
  white-space: pre-wrap;
  font-size: 1rem;
  text-decoration: none;
  color: darkgrey;
  text-align: center;

  animation: 3s ease-in-out 1.5s infinite floating;
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 0.5rem);
    }
    100% {
      transform: translate(0, -0px);
    }
  }

  &:hover {
    color: #00b899;
    animation: none;
  }
`;

const CarotBottom = styled(CarotTop)`
  animation: 3s ease-in-out infinite floating;
  top: auto;
  bottom: 1rem;
`;
