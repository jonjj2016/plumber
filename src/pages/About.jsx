import React from 'react';
import styled from 'styled-components';
import Image from '../utils/img/waiting.png';

const About = () => {
  return (
    <MainWrapper>
      {' '}
      {/* <Background /> */}
      About
    </MainWrapper>
  );
};
const MainWrapper = styled.div`
  min-height: 120vh;
  /* clip-path: polygon(0 0, 100% 0, 100% 72%, 16% 99%, 0 81%); */
  /* background-image: url('https://nebula.wsimg.com/2300726473aab2f8098f3f097508be8f?AccessKeyId=531592D248B589D87A56&disposition=0&alloworigin=1'); */
  background-size: cover;
  /* clip-path: polygon(0 0, 100% 0, 100% 72%, 47% 98%, 0 73%); */
  /* background-color: #333; */
  background-image: url(image);
  position: relative;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
export default About;
