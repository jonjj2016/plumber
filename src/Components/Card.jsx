import React from 'react';
import styled from 'styled-components';

const Card = ({ item }) => {
  const { title, options: services, backgroundImage } = item;
  return (
    <Wrapper image={backgroundImage}>
      <Background />
      <div className='header'>
        <div className='title'>{title}</div>
      </div>
      <Content>
        {services.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </Content>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #eee;
  min-height: 22rem;
  padding: 1rem;
  display: flex;
  background-image: url(${({ image }) => image});
  background-size: cover;
  position: relative;
  flex-direction: column;
  transition: 300ms;
  &:hover {
    box-shadow: inset 8px 0px 24px 0px rgba(0, 0, 0, 0.75);
  }
  .title {
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 700;
    position: relative;
    color: #ffdf00;
    /* color: #666; */
    z-index: 1;
    letter-spacing: 3px;
  }
  .heder {
    min-height: 30%;
  }
`;
const Content = styled.ul`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  height: 16rem;
  margin: 2rem 0;
  text-decoration: none;
  li {
  }
`;
const Item = styled.li`
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
  line-height: 1.6;
`;
const Background = styled.div`
  position: absolute;
  z-index: 0;
  background-color: #eee;
  opacity: 0.6;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;
export default Card;
