import React from 'react';
import { Wrapper, Nav, Container, Logo } from '../Styled/Menu';
import { Icon } from 'semantic-ui-react';

const Menu = ({ isOpen, toggleSlider }) => {
  return (
    <Wrapper>
      <Container>
        <div data-aos='fade-right'>
          <Logo>
            <span> Plumb</span>It
          </Logo>
        </div>
        <div data-aos='fade-left'>
          <Nav onClick={toggleSlider}>{!isOpen ? <Icon name='sidebar' /> : <Icon name='remove' />}</Nav>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Menu;
