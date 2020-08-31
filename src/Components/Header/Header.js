import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.scss';
import './hamburgers.css';

const Header = () => {

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
  <header id="header" className="header">

    <div className="header__logo">
      <Link to="/home"><img src="./img/logo.png" alt="logo"></img></Link>
    </div>

    <nav className="header__nav">
      <NavLink className="header__nav-link" to="/home">Home</NavLink>
      <div className="header__nav-link-decor"></div>
      <NavLink className="header__nav-link" to="/how-it-works">How it Works</NavLink>
      <div className="header__nav-link-decor"></div>
      <NavLink className="header__nav-link" to="/rates-fees">Rates & Fees</NavLink>
      <div className="header__nav-link-decor"></div>
      <NavLink className="header__nav-link" to="/lending-policy">Lending Policy</NavLink>
      <div className="header__nav-link-decor"></div>
      <NavLink className="header__nav-link" to="/returning-customer">Returning Customer</NavLink>
    </nav>

    <div className="header__mobile-menu">
      <button
        className={isActiveMenu ? "hamburger hamburger--spin is-active" : "hamburger hamburger--spin"}
        type="button"
        onClick={() => setIsActiveMenu(!isActiveMenu)}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>

    <div className={isActiveMenu ? "mobile-menu active" : "mobile-menu"}>
      <NavLink className="header__nav-link mobile-menu__link" to="/home">Home</NavLink>
      <NavLink className="header__nav-link mobile-menu__link" to="/how-it-works">How it Works</NavLink>
      <NavLink className="header__nav-link mobile-menu__link" to="/rates-fees">Rates & Fees</NavLink>
      <NavLink className="header__nav-link mobile-menu__link" to="/lending-policy">Lending Policy</NavLink>
      <NavLink className="header__nav-link mobile-menu__link" to="/returning-customer">Returning Customer</NavLink>
    </div>


  </header>
  );
}

export default Header;
