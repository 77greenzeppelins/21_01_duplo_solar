import React from 'react';
import { Link } from 'react-router-dom';
import { textForArticles } from '../assets/dataForArticles/dataForArticles';

const ScreenATop = () => {
  return (
    <>
      <div className="a-top">
        <div className="a-top__overlay"></div>
        <nav className="a-top__nav">
          <Link to="/contact" className="logo">
            duploElements
          </Link>
        </nav>
        <ul className="a-top__text">
          <li>{textForArticles.article1a}</li>
          <li>{textForArticles.article1b}</li>
          <li>{textForArticles.article1c}</li>
        </ul>
      </div>
    </>
  );
};

export default ScreenATop;
