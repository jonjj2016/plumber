import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Aoss = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};

export default Aoss;
