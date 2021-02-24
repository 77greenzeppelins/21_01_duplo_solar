import React, { useEffect } from 'react';
//animation
import { initialAnimation } from '../../animations/animations';
//components
import InitialOverlay from '../initialOverlay/initialOverlay';
import ScreenATop from '../ScreenATop';
import ScreenABottom from '../ScreenABottom';
import ScreenB from '../ScreenB';

const Home = () => {
  // useEffect(() => {
  //   let dynamicViewportHeight = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty(
  //     '--dynamicViewportHeight',
  //     `${dynamicViewportHeight}px`
  //   );
  // }, []);

  useEffect(() => {
    initialAnimation();
  }, []);

  return (
    <div>
      <InitialOverlay />
      <ScreenATop />
      <ScreenABottom />
      <ScreenB />
    </div>
  );
};

export default Home;
