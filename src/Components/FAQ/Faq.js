import React, { useState } from 'react';

import './Faq.scss';

const Faq = () => {

  const [isOpenPersonalLoan, setIsOpenPersonalLoan] = useState(true);
  const [isOpenHowMuchCanIBorrow, setIsOpenHowMuchCanIBorrow] = useState(false);
  const [isOpenHowWillIReceive, setIsOpenHowWillIReceive] = useState(false);
  const [isOpenIfIHaveBadCredit, setIsOpenIfIHaveBadCredit] = useState(false);
  const [isOpenHowLongDoesTheProcessTake, setIsOpenHowLongDoesTheProcessTake] = useState(false);



  return (
  <div className="faq">

    <div className="faq__inner">
      <h2 className="section-info__article">FAQ</h2>

      <div className="faq__block">
        <div onClick={() => setIsOpenPersonalLoan(!isOpenPersonalLoan)} className="faq__block-text">
          <h3 className="faq__benefits-inner-text-article">Who qualifies for a personal loan?</h3>
          <div className={isOpenPersonalLoan ? "faq__block-text-decoration active" : "faq__block-text-decoration"}><div></div><div></div></div>
        </div>
        <p className={isOpenPersonalLoan && "active"}>
          Most loan providers require you to have been employed in your current job for 90 days minimum. You also need to be 18 years of age and a US citizen or a permanent resident. Your income should be approximately $1,000 per month after tax. You will need to provide a valid email address, and home and work phone numbers.
        </p>
      </div>

      <div className="faq__block">
        <div onClick={() => setIsOpenHowMuchCanIBorrow(!isOpenHowMuchCanIBorrow)} className="faq__block-text">
          <h3 className="faq__benefits-inner-text-article">How much can I borrow?</h3>
          <div className={isOpenHowMuchCanIBorrow ? "faq__block-text-decoration active" : "faq__block-text-decoration"}><div></div><div></div></div>
        </div>
        <p className={isOpenHowMuchCanIBorrow && "active"}>
          The amount a lender is ready to give you is determined by how the loan provider views a number of factors, including your state of residence and applicable legal restrictions (loans are not available in all states). Many of the lenders in our network loan between $100 and $5,000.
        </p>
      </div>

      <div className="faq__block">
        <div onClick={() => setIsOpenHowWillIReceive(!isOpenHowWillIReceive)} className="faq__block-text">
          <h3 className="faq__benefits-inner-text-article">How will I receive the loan money?</h3>
          <div className={isOpenHowWillIReceive ? "faq__block-text-decoration active" : "faq__block-text-decoration"}><div></div><div></div></div>
        </div>
        <p className={isOpenHowWillIReceive && "active"}>
          Once the loan provider has approved your loan and you agree to accept all of your loan terms, your loan will then be deposited directly into your bank account, the process can be fully completed as soon as the next working day.
        </p>
      </div>

      <div className="faq__block">
        <div onClick={() => setIsOpenIfIHaveBadCredit(!isOpenIfIHaveBadCredit)} className="faq__block-text">
          <h3 className="faq__benefits-inner-text-article">If I have bad credit, can I still get a loan?</h3>
          <div className={isOpenIfIHaveBadCredit ? "faq__block-text-decoration active" : "faq__block-text-decoration"}><div></div><div></div></div>
        </div>
        <p className={isOpenIfIHaveBadCredit && "active"}>
          Personal loans are normally offered to people with a good credit record, although different loan providers have different underwriting policies. A good substitute for those with bad credit may be to seek out a short-term personal loan through a lender in our network.
        </p>
      </div>

      <div className="faq__block">
        <div onClick={() => setIsOpenHowLongDoesTheProcessTake(!isOpenHowLongDoesTheProcessTake)} className="faq__block-text">
          <h3 className="faq__benefits-inner-text-article">How long does the process take?</h3>
          <div className={isOpenHowLongDoesTheProcessTake ? "faq__block-text-decoration active" : "faq__block-text-decoration"}><div></div><div></div></div>
        </div>
        <p className={isOpenHowLongDoesTheProcessTake && "active"}>
          It only takes several minutes to complete our secure form online. As soon as we receive your information, we start searching for an appropriate lender. You may have a response within minutes. Final approval and funds transfer can be completed in as little as 24 to 48 hours.
        </p>
      </div>

    </div>


    <div className="faq__inner faq__benefits">
      <h2 className="section-info__article">Our Benefits</h2>

      <div className="faq__benefits-inner">
        <img className="faq__benefits-inner-img" src="./img/ic_benefit_1.png" alt="ic_benefit"></img>
        <div className="faq__benefits-inner-text">
          <h3 className="faq__benefits-inner-text-article">Full processing online for your loan request</h3>
          <p>
            There is no need for you to run around or wait in queues to get loan approval. You can request to be connected to a lender from the comfort of home or anywhere via your mobile device.
          </p>
        </div>
      </div>

      <div className="faq__benefits-inner">
        <img className="faq__benefits-inner-img" src="./img/ic_benefit_2.png" alt="ic_benefit"></img>
        <div className="faq__benefits-inner-text">
          <h3 className="faq__benefits-inner-text-article">Submit a request to see if you can connect with a lender</h3>
          <p>
            You will quickly know if there’s a loan provider that can fulfill your loan needs and this can often be within minutes of you submitting all required information.
          </p>
        </div>
      </div>

      <div className="faq__benefits-inner">
        <img className="faq__benefits-inner-img" src="./img/ic_benefit_3.png" alt="ic_benefit"></img>
        <div className="faq__benefits-inner-text">
          <h3 className="faq__benefits-inner-text-article">Lenders are always on standby to receive requests</h3>
          <p>
            We have a competitive advantage because our network of lender partners is one of the most extensive in the personal loan niche. We have 100-plus individual lenders prepared and waiting to receive requests from potential customers.
          </p>
        </div>
      </div>


    </div>


  </div>
  );
}

export default Faq;
