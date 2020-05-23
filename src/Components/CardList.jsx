import React from 'react';
import styled from 'styled-components';
const CardList = ({ children }) => {
  return <Wraper>{children}</Wraper>;
};
const Wraper = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding-top: 5rem;
  /* grid-gap: 1rem; */
`;
export default CardList;
