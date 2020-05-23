import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Background />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 50vh;
  position: relative;
  background-color: #eee;
  width: 100%;
  clip-path: polygon(0 38%, 100% 0, 100% 100%, 0 100%, 0% 50%);

  background-image: url('https://previews.123rf.com/images/9dreamstudio/9dreamstudio1708/9dreamstudio170800112/83217696-plumber-tools-on-black-background-top-view-.jpg');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
`;
export default Footer;
