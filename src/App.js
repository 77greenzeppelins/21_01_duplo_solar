import React, { useEffect } from 'react';
import './styles/App.scss';
// import { textAnimation } from '../src/animations/animations';
import { initialAnimation } from '../src/animations/animations';

//
import InitialOverlay from './components/initialOverlay/initialOverlay';
import ContentOverlay from './components/contentOverlay/contentOverlay';
import Header from './components/header/header';
import Sentence1 from './components/sentence1/sentence1';
import Sentence2 from './components/sentence2/sentence2';
import Sentence3 from './components/sentence3/sentence3';

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

function App() {
  useEffect(() => {
    initialAnimation(...animationsTargets);
  }, []);

  return (
    <div className="App">
      <InitialOverlay />
      <ContentOverlay />
      <Header />
      <Sentence1 />
      <Sentence2 />
      <Sentence3 />
    </div>
  );
}

export default App;
