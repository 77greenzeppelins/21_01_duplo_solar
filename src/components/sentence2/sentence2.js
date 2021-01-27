import React from 'react';
import { textForArticles } from '../../assets/dataForArticles/dataForArticles';
//machine icons
import Fridge from '../../assets/icons/fridge';
import WaschingMachine from '../../assets/icons/washingMachine';
import Owen from '../../assets/icons/owen';
import WiFi from '../../assets/icons/wifi';
import MusicNotes from '../../assets/icons/musicNotes';
import Battery from '../../assets/icons/battery';

const Sentence2 = () => {
  return (
    <section className="sentence2">
      <article className="container">
        <div className="text-section">
          <p>{textForArticles.article2a}</p>
          <p>
            <span>{textForArticles.article2b},</span>
          </p>
          <p>{textForArticles.article2c}</p>
        </div>
        <div className="devices-icons">
          <Fridge />
          <WiFi />
          <Owen />
          <MusicNotes />
          <WaschingMachine />
          <Battery />
        </div>
      </article>
    </section>
  );
};

export default Sentence2;

//{textForArticles.article2a}
