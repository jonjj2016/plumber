import React, { useState } from 'react';
import Menu from './Components/Menu';
import { AppWrapper } from './Styled/Common';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import Route from './pages';
import Aos from './Components/Aos';

function App() {
  const [state, setState] = useState({
    sliderOpen: false,
  });
  const onToggleSlider = () => {
    setState({ ...state, sliderOpen: !state.sliderOpen });
  };

  return (
    <Aos>
      <AppWrapper>
        <Menu isOpen={state.sliderOpen} toggleSlider={onToggleSlider} />
        <Slider isOpen={state.sliderOpen} toggleSlider={onToggleSlider} />
        <Route />
        <Footer />
      </AppWrapper>
    </Aos>
  );
}

export default App;
