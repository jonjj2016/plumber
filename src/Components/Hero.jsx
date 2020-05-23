import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper>
      <ClipPath>
        <div className='background'></div>
      </ClipPath>
      <Content>
        <Badge>
          <div>
            <svg>
              <defs>
                <filter id='goo'>
                  <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='name' />
                  <feColorMatrix
                    in='name'
                    mode='matrix'
                    values='1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 15 -10'
                    result='b'
                  />

                  <feBlend in='SourceGraphic' in2='b' />
                </filter>
              </defs>
            </svg>
            {/* <div className='text'>Drop</div> */}
            <div className='drop'></div>
          </div>
          <div className='title'>we will fix</div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos natus vero magni autem eaque molestias veritatis saepe. Quasi quia praesentium quos delectus iure, error necessitatibus cumque fugit?</p>
        </Badge>
      </Content>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  color: #333;
  height: 100%;
  width: 100%;
`;
const Badge = styled.div`
  width: 40vw;
  min-height: 20vh;
  background-color: #ffdf00;
  border-radius: 0 4rem;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
  position: relative;
  @media only screen and (max-width: 70em) {
    width: 100vw;
    margin: 0 auto;
  }
  .title {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    margin: 1rem 0;
    /* color: red; */
  }
  svg {
    position: absolute;
  }
  p {
    width: 80%;
    margin: 1.7rem 0;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 200px;
    /* z-index: 999; */
    color: white;
  }
  .drop {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: #ffdf00;
    position: absolute;
    border-bottom: 1px solid #333;
    top: 50%;
    left: 50%;
    transform: translate(120%, -800%) scaleX(0.5);
    animation: move 6s cubic-bezier(1, 0.04, 0.74, 0.2) infinite;
  }
  @keyframes move {
    0% {
      transform: translate(120%, -800%) scaleX(0.2);
      height: 60px;
    }
    30% {
      transform: translate(120%, -200%);
      height: 30px;
    }
    70% {
      transform: translate(120%, 100%);
      height: 30px;
    }
    100% {
      transform: translate(120%, 800%) scaleX(0.2);
      height: 60px;
    }
  }
`;
const ClipPath = styled.div`
  background-image: url('https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 81%, 0 100%, 0% 50%);

  /* clip-path: polygon(0 0, 100% 0, 90% 85%, 0 100%, 0% 50%); */
  position: relative;

  background-size: cover;
  background-repeat: no-repeat;
  .background {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
export default Hero;
