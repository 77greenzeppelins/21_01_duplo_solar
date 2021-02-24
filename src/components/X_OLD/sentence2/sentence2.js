import React from 'react';
import { textForArticles } from '../../assets/dataForArticles/dataForArticles';
//machines icons
import Fridge from '../../assets/icons/fridge';
import WaschingMachine from '../../assets/icons/washingMachine';
import Owen from '../../assets/icons/owen';
import WiFi from '../../assets/icons/wifi';
import MusicNotes from '../../assets/icons/musicNotes';
import Battery from '../../assets/icons/battery';
import Induction from '../../assets/icons/induction';
import Battery2 from '../../assets/icons/battery2';

const Sentence2 = () => {
  return (
    <section className="sentence2">
      <article className="container">
        <div className="sentence2__text">
          <p>{textForArticles.article2a}</p>
          <p>
            <span>{textForArticles.article2b},</span>
          </p>
          <p>{textForArticles.article2c}</p>
        </div>
        <div className=" sentence2__icons">
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
      </article>
    </section>
  );
};

export default Sentence2;

//{textForArticles.article2a}
