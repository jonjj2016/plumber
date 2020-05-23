import React from 'react';
import styled from 'styled-components';
import CardList from '../Components/CardList';
import Card from '../Components/Card';

const About = ({ services }) => {
  console.log(services);
  return (
    <MainWrapper>
      <Content>
        <CardList>
          {services.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </CardList>
      </Content>
    </MainWrapper>
  );
};
const MainWrapper = styled.div`
  min-height: 100vh;
  padding-top: 7rem;

  position: relative;
`;
const Background = styled.div`
  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.6);
`;
const Content = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  /* background-color: #999; */
`;
export default About;
