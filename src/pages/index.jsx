import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contacts from './Contacts';
import Services from './Features';
import About from './About';
import { services } from '../data/Services';
import { useTransition, animated } from 'react-spring';

const Index = () => {
  const [state, setState] = useState({
    services: services,
  });

  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate(100%,0)' },
    enter: { opacity: 1, transform: 'translate(0,0)' },
    leave: { opacity: 0, transform: 'translate(-50%,0)' },
  });

  return (
    <React.Fragment>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/services' render={() => <Services services={state.services} />} />
            <Route path='/' component={Home} />
          </Switch>
        </animated.div>
      ))}
    </React.Fragment>
  );
};

export default Index;
