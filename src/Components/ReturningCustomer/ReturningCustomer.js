import React from 'react';

import './ReturningCustomer.scss';

const ReturningCustomer = () => {

  const onSubmitloginForm = (e) => {
    e.preventDefault();
  }

  return (
  <div className="returningCustomer">
    <form onSubmit={(e) => onSubmitloginForm(e)} className="returningCustomer__form">
      <h3 className="returningCustomer__article">Login to Your Account</h3>
      <p className="returningCustomer__text">Welcome Back!</p>
      <label className="home-header__form-input-label returningCustomer__label" htmlFor="in-2">Phone Number</label>
      <input type="number" className="custom-select custom-select-lg mb-3" placeholder="Phone Number"></input>
      <label className="home-header__form-input-label returningCustomer__label" htmlFor="in-2">Last 4 Digits of SSN</label>
      <input max="9999" type="number" className="custom-select custom-select-lg mb-3" placeholder="Last 4 Digits of SSN"></input>
      <button  className="returningCustomer__button" type="submit">Login</button>
      <p className="returningCustomer__login-text">
        By completing this form and submitting your information you agree to our Disclaimer and Privacy Policy.
      </p>
    </form>
  </div>
  );
}

export default ReturningCustomer;
