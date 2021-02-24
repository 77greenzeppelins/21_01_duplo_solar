import React from 'react';
import { textForArticles } from '../assets/dataForArticles/dataForArticles';
//machines icons
import Fridge from '../assets/icons/fridge';
import WaschingMachine from '../assets/icons/washingMachine';
import Owen from '../assets/icons/owen';
import WiFi from '../assets/icons/wifi';
import MusicNotes from '../assets/icons/musicNotes';
import Battery from '../assets/icons/battery';
import Induction from '../assets/icons/induction';
import Battery2 from '../assets/icons/battery2';

const ScreenABottom = () => {
  return (
    <>
      <div className="a-bottom">
        <div className="a-bottom__overlay"></div>
        <ul className="a-bottom__text">
          <li>{textForArticles.article2a}</li>
          <li>{textForArticles.article2b}</li>
          <li>{textForArticles.article2c}</li>
        </ul>
        <div className="a-bottom__icons">
          <div className="icon">
            <Fridge />
          </div>
          <div className="icon">
            <WiFi />
          </div>
          <div className="icon">
            <Owen />
          </div>
          <div className="icon">
            <MusicNotes />
          </div>
          <div className="icon">
            <WaschingMachine />
          </div>
          <div className="icon">
            <Battery />
          </div>
          <div className="icon">
            <Fridge />
          </div>
          <div className="icon">
            <WiFi />
          </div>
          <div className="icon">
            <Owen />
          </div>
          <div className="icon">
            <MusicNotes />
          </div>
          <div className="icon">
            <Induction />
          </div>
          <div className="icon">
            <Battery2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenABottom;
