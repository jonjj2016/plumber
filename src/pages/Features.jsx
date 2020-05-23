import React from 'react';
import styled from 'styled-components';
import Image from '../utils/img/waiting.png';
import Card from '../Components/Card';
import CardList from '../Components/CardList';

const About = () => {
  return (
    <MainWrapper>
      {/* <Background /> */}
      <Content></Content>
    </MainWrapper>
  );
};
const MainWrapper = styled.div`
  min-height: 120vh;
  clip-path: polygon(0 0, 100% 0, 100% 72%, 16% 99%, 0 81%);
  background-size: cover;
  /* clip-path: polygon(0 0, 100% 0, 100% 72%, 47% 98%, 0 73%); */
  background-color: #333;
  background-image: url(image);
  position: relative;
  /* display:flex; */
  /* align-items:c */
`;
const Background = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.6);
`;
const Content = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background-color: #999;
`;
export default About;
