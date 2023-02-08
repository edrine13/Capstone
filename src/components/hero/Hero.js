import React from 'react';
import { Link } from 'react-router-dom';
import style from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`d-flex align-items-center ${style.hero}`}>
      <div className={`container`}>
        <h1>
          Welcome to <span>Link Coop</span>
        </h1>
        <h2>Let's change the way we do things...</h2>
      </div>
    </section>
  );
};

export default Hero;
