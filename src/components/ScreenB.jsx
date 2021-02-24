import React from 'react';
import { Link } from 'react-router-dom';
import { textForArticles } from '../assets/dataForArticles/dataForArticles';
import { itemsToBuy } from '../assets/dataForArticles/dataForArticles';

const ScreenB = () => {
  return (
    <>
      <div className="b-screen">
        <div className="b-text-wrapper b-text-wrapper--top">
          <nav className="b-screen__nav">
            <Link to="/contact" className="logo">
              duploElements
            </Link>
          </nav>
          {/* <div className="b-screen__overlay"></div> */}
          <ul className="b-screen__text">
            <li>{textForArticles.article3a}</li>
            <li>{textForArticles.article3b}</li>
            <li>
              za dokładnie <span>zero</span> zł....
            </li>
          </ul>
        </div>
        <div className="b-text-wrapper b-text-wrapper--bottom">
          <ul className=" b-screen__text-down">
            <li>{textForArticles.article3d}</li>
            <li>{textForArticles.article3e} na</li>
            {/* <li>
              l <span className="item-to-buy"></span>
            </li> */}
          </ul>
          <div className="b-screen__animated-items">
            {/* <div className="inner-div">{itemsToBuy[0]}</div>
            <div className="inner-div">{itemsToBuy[2]}</div> */}
            {itemsToBuy.map((item, index) => {
              console.log('it is an item:', item);
              return (
                <div key={index} className="inner-div">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <nav className="b-screen__cta">
          <p className="cta__invitation">zapraszam do kontaktu</p>
          <div className="cta__link-wrapper">
            <Link to="/contact" className="cta__link">
              zapraszam do kontaktu
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default ScreenB;
