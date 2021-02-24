import React from 'react';
import { textForArticles } from '../../assets/dataForArticles/dataForArticles';

const Sentence1 = () => {
  return (
    <section className="sentence1">
      <article className="container">
        <div className="text-section">
          <p>{textForArticles.article1a}</p>
          <p>
            <span>{textForArticles.article1b}</span>
          </p>
          <p>{textForArticles.article1c}</p>
        </div>
      </article>
    </section>
  );
};

export default Sentence1;
