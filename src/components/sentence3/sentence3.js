import React from 'react';
import { textForArticles } from '../../assets/dataForArticles/dataForArticles';

const Sentence3 = () => {
  return (
    <section className="sentence3">
      <article className="container ">
        <div className="sentence3__top">
          <p>{textForArticles.article3a}</p>
          <p>{textForArticles.article3b}</p>
          <p>
            za dokładnie <span>zero</span> zł....
          </p>
        </div>
        <div className="sentence3__bottom">
          <p className="paragraph-padding">{textForArticles.article3d}</p>
          <p>{textForArticles.article3e}</p>
          <p>
            na <span className="item-to-buy"></span>
          </p>
        </div>
      </article>
      <nav className="callToAction"></nav>
    </section>
  );
};

export default Sentence3;
