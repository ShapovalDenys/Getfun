import React, { useState } from 'react';

import './Decoration.scss';

const Decoration = () => {

  const [rotateDeg, setRotateDeg] = useState(0);


  return (
  <div className="decoration">
    <div className="decoration__inner">
      <h3 onMouseMove={() => setRotateDeg(270)} className={rotateDeg === 270 ? "decoration__inner-article-1 active" : "decoration__inner-article-1"}>If approved get your money</h3>
      <h3 onMouseMove={() => setRotateDeg(180)} className={rotateDeg === 180 ? "decoration__inner-article-2 active" : "decoration__inner-article-2"}>Complete a simple form and see if you qualify</h3>
      <h3 onMouseMove={() => setRotateDeg(0)} className={rotateDeg === 0 ? "decoration__inner-article-3 active" : "decoration__inner-article-3"}>Need money?</h3>
      <h3 onMouseMove={() => setRotateDeg(90)} className={rotateDeg === 90 ? "decoration__inner-article-4 active" : "decoration__inner-article-4"}>Use our service on any device</h3>
      <div className="decoration__inner-numbers-back"></div>
      <div className="decoration__inner-numbers-arrow" style={ { transform: `rotate(${rotateDeg}deg)` }}></div>
      <div className="decoration__inner-numbers">
        <div className={rotateDeg === 270 ? "decoration__inner-numbers-num1 decoration__inner-numbers-num-active" : "decoration__inner-numbers-num1"}>4</div>
        <div className={rotateDeg === 0 ? "decoration__inner-numbers-num2 decoration__inner-numbers-num-active" : "decoration__inner-numbers-num2"}>1</div>
        <div className={rotateDeg === 90 ? "decoration__inner-numbers-num3 decoration__inner-numbers-num-active" : "decoration__inner-numbers-num3"}>2</div>
        <div className={rotateDeg === 180 ? "decoration__inner-numbers-num4 decoration__inner-numbers-num-active" : "decoration__inner-numbers-num4"}>3</div>
      </div>
    </div>
    <div className="decoration__inner-mobile">
      <h3>Need money?</h3>
      <div className="decoration__inner-mobile-div"><div></div><div></div></div>
      <h3>Use our service on any device</h3>
      <div className="decoration__inner-mobile-div"><div></div><div></div></div>
      <h3>Complete a simple form and see if you qualify</h3>
      <div className="decoration__inner-mobile-div"><div></div><div></div></div>
      <h3>If approved get your money</h3>
    </div>
  </div>
  );
}

export default Decoration;
