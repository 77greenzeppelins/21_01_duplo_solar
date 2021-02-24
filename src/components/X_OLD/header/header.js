import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="header">
      <Link to="/contact" className="logo">
        <span>duplo</span>ELEMENTS
      </Link>
    </section>
  );
};

export default Header;
