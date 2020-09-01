import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMoneyValue, setMoneyValue } from '../Store/Index';

const Footer = () => {

  const moneyValue = useSelector(getMoneyValue);
  const dispatch = useDispatch();

  return (
  <footer className="footer">
    <div className="footer__inner">
      <nav className="footer__nav">
        <Link className="header__nav-link footer__nav-link" to="/home">Home</Link>

        <Link className="header__nav-link footer__nav-link" to="/how-it-works">How it Works</Link>

        <Link className="header__nav-link footer__nav-link" to="/rates-fees">Rates & Fees</Link>

        <Link className="header__nav-link footer__nav-link" to="/lending-policy">Lending Policy</Link>

        <Link className="header__nav-link footer__nav-link" to="/returning-customer">Returning Customer</Link>
      </nav>

        <div className="footer__select">
          <div className="footer__select-inner">
            <label className="footer__select-inner-label" htmlFor="in-1">Select Loan Amount</label>
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

          <div className="footer__select-inner">
            <label className="footer__select-inner-label" htmlFor="in-2">What is your zip code?</label>
            <input type="number" className="custom-select custom-select-lg mb-3" placeholder="ZIP Code"></input>
          </div>

          <Link to="chat"><button className="home-header__select-button" >Get Started</button></Link>

        </div>




      <p>
        Important Disclosures. Please Read Carefully.
      </p>
      <p>
        Persons facing serious financial difficulties should consider other alternatives or should seek out professional financial advice.
      </p>
      <p>
        This website is not an offer to lend. getfundsasap.com is not a lender or lending partner and does not make loan or credit decisions. getfundsasap.com connects interested persons with a lender or lending partner from a network of approved lenders and lending partners. getfundsasap.com does not control and is not responsible for the actions or inactions of any lender or lending partner, is not an agent, representative or broker of any lender or lending partner, and does not endorse any lender or lending partner. getfundsasap.com receives compensation from its lenders and lending partners, often based on a ping-tree model similar to Google AdWords where the highest available bidder is connected to the consumer. Regardless, getfundsasap.com's service is always free to you. In some cases, you may be given the option of obtaining a loan from a tribal lender. Tribal lenders are subject to tribal and certain federal laws while being immune from state law including usury caps. If you are connected to a tribal lender, please understand that the tribal lender's rates and fees may be higher than state-licensed lenders. Additionally, tribal lenders may require you to agree to resolve any disputes in a tribal jurisdiction. You are urged to read and understand the terms of any loan offered by any lender, whether tribal or state-licensed, and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
      </p>
      <p>
        This service is not available in all states. If you request to connect with a lender or lending partner in a particular state where such loans are prohibited, or in a location where getfundsasap.com does not have an available lender or lending partner, you will not be connected to a lender or lending partner. You are urged to read and understand the terms of any loan offered by any lender or lending partner, and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
      </p>
      <p>
        By submitting your information via this website, you are authorizing getfundsasap.com and its partners to do a credit check, which may include verifying your social security number, driver license number or other identification, and a review of your creditworthiness, and to continue to monitor you credit status via additional credit checks or other methods. Credit checks are usually performed by one of the major credit bureaus such as Experian, Equifax and TransUnion, but also may include alternative credit bureaus such as Teletrack, DP Bureau or others. You also authorize getfundsasap.com to share your information and credit history with a network of approved lenders and lending partners.
      </p>
      <p>
        Lender's or Lending Partner's Disclosure of Terms.
      </p>
      <p>
        The lenders and lending partners you are connected to will provide documents that contain all fees and rate information pertaining to the loan being offered, including any potential fees for late-payments and the rules under which you may be allowed (if permitted by applicable law) to refinance, renew or rollover your loan. Loan fees and interest rates are determined solely by the lender or lending partner based on the lender's or lending partner's internal policies, underwriting criteria and applicable law. getfundsasap.com has no knowledge of or control over the loan terms offered by a lender and lending partner. You are urged to read and understand the terms of any loan offered by any lenders and lending partners and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
      </p>
      <p>
        Late Payments Hurt Your Credit Score
      </p>
      <p>
        Please be aware that missing a payment or making a late payment can negatively impact your credit score. To protect yourself and your credit history, make sure you only accept loan terms that you can afford to repay. If you cannot make a payment on time, you should contact your lenders and lending partners immediately and discuss how to handle late payments.
      </p>

    </div>
  </footer>
  );
}

export default Footer;
