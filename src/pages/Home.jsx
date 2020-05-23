import React from 'react';
import styled from 'styled-components';
import Hero from '../Components/Hero';

const Home = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
`;
export default Home;
