import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  font-size: 2rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  -webkit-box-shadow: -1px 6px 42px 5px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: -1px 6px 42px 5px rgba(0, 0, 0, 0.62);
  box-shadow: -1px 6px 42px 5px rgba(0, 0, 0, 0.62);
`;
export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #eee;
`;
export const Nav = styled.div`
  cursor: pointer;
  color: #ffdf00;
`;
export const Logo = styled.div`
  cursor: pointer;
  font-weight: 900;
  text-transform: uppercase;
  span {
    color: #ffdf00;
  }
`;
