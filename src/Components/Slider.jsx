import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Slider = ({ isOpen, toggleSlider }) => {
  return (
    <React.Fragment>
      <Dimmer isOpen={isOpen} onClick={toggleSlider} />
      <Wrapper isOpen={isOpen}>
        <Background />
        <Path onClick={toggleSlider} to='/'>
          Home
        </Path>
        <Path onClick={toggleSlider} to='/about'>
          About
        </Path>
        <Path onClick={toggleSlider} to='/contacts'>
          Contact
        </Path>
        <Path onClick={toggleSlider} to='/projects'>
          Projects
        </Path>
        <Path onClick={toggleSlider} to='/services'>
          Services
        </Path>
      </Wrapper>
    </React.Fragment>
  );
};
const Background = styled.div`
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  background-color: #ffdf00;
  background-color: #eee;
  border-radius: 20px 0 0 0;
  left: 0;
  opacity: 0.9;
`;
const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  top: 4rem;
  right: 0;
  width: 20vw;

  box-shadow: -24px 7px 17px 5px rgba(0, 0, 0, 0.75);
  border-radius: 10px 0 0 10px;
  padding: 3rem;
  color: #eee;
  z-index: 100;
  transition: 1200ms;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(150%)')};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 70em) {
    width: 90vw;
  }
`;

const Dimmer = styled.div`
  z-index: 99;
  width: 100%;
  position: fixed;
  top: 3.7rem;
  cursor: pointer;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;
const Path = styled(Link)`
  font-size: 2rem;
  font-weight: 900;
  color: #333;

  transition: 300ms;
  :hover {
    color: #111;
  }
`;
export default Slider;
