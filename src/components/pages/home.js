import React, { useEffect } from 'react';
//animation
import { initialAnimation } from '../../animations/animations';
//components
import InitialOverlay from '../initialOverlay/initialOverlay';
// import InitialOverlay from './components/initialOverlay/initialOverlay';
import ContentOverlay from '../contentOverlay/contentOverlay';
import Header from '../header/header';
import Sentence1 from '../sentence1/sentence1';
import Sentence2 from '../sentence2/sentence2';
import Sentence3 from '../sentence3/sentence3';

const animationsTargets = [
  '.overlay-initial',
  '.overlay-initial .logo',
  '.content-overlay .overlay__top',
  '.content-overlay .overlay__bottom',
  '.sentence1 p',
  '.sentence2 p',
  '.devices-icons svg',
  '.sentence3',
  '.sentence3 .sentence3__top p',
  '.sentence3 .sentence3__bottom p',
  '.item-to-buy',
];

const Home = () => {
  useEffect(() => {
    initialAnimation(...animationsTargets);
  }, []);

  return (
    <div>
      <InitialOverlay />
      <ContentOverlay />
      <Header />
      <Sentence1 />
      <Sentence2 />
      <Sentence3 />
    </div>
  );
};

export default Home;
