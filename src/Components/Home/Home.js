import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMoneyValue, setMoneyValue } from '../Store/Index';

import './Home.scss';
import Faq from '../FAQ/Faq';
import Slogan from '../Slogan/Slogan';
import Decoration from '../Decoration/Decoration';

const Home = () => {

  const moneyValue = useSelector(getMoneyValue);
  const dispatch = useDispatch();

  return (
  <section className="home">
    <div className="home-header">

      <img className="home-header__img-people" src="./img/img_banner_people.png" alt="img_banner_people"></img>

      <div className="home-header__select">
        <h2 className="home-header__select-article">NEED A LOAN?</h2>
        <span className="home-header__select-description">WE'RE HERE TO HELP YOU</span>

        <div className="home-header__select-inner">
          <span className="home-header__form-article">How much do you need?</span>
          <div className="home-header__form-input-block">

            <div className="home-header__form-input">
              <label className="home-header__form-input-label" htmlFor="in-1">Select Loan Amount</label>
              <select defaultValue={moneyValue} onChange={(e) => dispatch(setMoneyValue(e.target.value))} id="in-1" className="custom-select custom-select-lg mb-3">
                <option value="100$">100$</option>
                <option value="200$">200$</option>
                <option value="300$">300$</option>
                <option value="400$">400$</option>
                <option value="500$">500$</option>
                <option value="600$">600$</option>
                <option value="700$">700$</option>
                <option value="800$">800$</option>
                <option value="900$">900$</option>
                <option value="1000$">1000$</option>
                <option value="1500$">1500$</option>
                <option value="2000$">2000$</option>
                <option value="2500$-5000$">2500$-5000$</option>
              </select>
            </div>

            <div className="home-header__form-input">
              <label className="home-header__form-input-label" htmlFor="in-2">What is your zip code?</label>
              <input type="number" className="custom-select custom-select-lg mb-3" placeholder="ZIP Code"></input>
            </div>

          </div>

          <span className="home-header__form-text">You agree to Privacy Policy and Disclaimer by completing this form and submitting your information.</span>
          <Link to="chat"><button className="home-header__select-button" >Get Started</button></Link>

        </div>

      </div>

    </div>
    <div className="block__info">

      <div className="block__info-inner">
        <img className="block__info-inner-img" src="./img/ic_feature.png" alt="ic_feature"></img>
        <span className="block__info-inner-span">Fast</span>
      </div>

      <div className="block__info-inner">
        <img className="block__info-inner-img" src="./img/ic_feature_1.png" alt="ic_feature"></img>
        <span className="block__info-inner-span">Secure</span>
      </div>

      <div className="block__info-inner">
        <img className="block__info-inner-img" src="./img/ic_feature_3.png" alt="ic_feature"></img>
        <span className="block__info-inner-span">Easy</span>
      </div>

    </div>
    <Decoration />
    <div className="trusted-section section-info">
      <h2 className="section-info__article">We are trusted</h2>

      <div className="section-info__inner">
        <div className="trusted-section__text">
          <p>
            The Personal Loan Process
          </p>
          <p>
            Although we accept requests for loans from individuals with any credit score there are still some basic requirements you must meet in order to connect with a lender. Before you request a loan, make sure you meet specific criteria regarding these items:
          </p>
          <p>
            <strong>Age/lD/Residency Status</strong> - You must be 18 or older to be eligible for a personal loan. You must also have a valid Social Security number and be a legal US Citizen or permanent resident.
          </p>
          <p>
            <strong>Income</strong> - ln order to ensure that you wlll be able to repay a loan, you must either have employment, be self-employed, or receive regular or disability or Social Security beneﬁts.
          </p>
        </div>
        <div>
          <img src="./img/img_trust.png" alt="img_trust"></img>
        </div>
      </div>
    </div>


    <div className="what-will-you-get-section section-info">
      <h2 className="section-info__article">What will you get?</h2>

      <div className="section-info__inner">

        <div className="what-will-you-get-section__inner">
          <img src="./img/ic_what_you_get_1.png" alt="ic_what_you_get"></img>
          <div className="what-will-you-get-section__inner-decoration"></div>
          <p className="what-will-you-get-section__inner-text">
            We will attempt to quickly connect you with a lender
          </p>
        </div>

        <div className="what-will-you-get-section__inner">
          <img src="./img/ic_what_you_get_2.png" alt="ic_what_you_get"></img>
          <div className="what-will-you-get-section__inner-decoration"></div>
          <p className="what-will-you-get-section__inner-text">
            Easy and user oriented interface
          </p>
        </div>

        <div className="what-will-you-get-section__inner">
          <img src="./img/ic_what_you_get_3.png" alt="ic_what_you_get"></img>
          <div className="what-will-you-get-section__inner-decoration"></div>
          <p className="what-will-you-get-section__inner-text">
            If approved, you could get your money as soon as the next bussiness day
          </p>
        </div>



      </div>
    </div>



  <Faq />
  <Slogan />
  </section>
  );
}

export default Home;
