import React, { useState, useRef } from 'react';

import './MainSection.scss';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const MainSection = () => {

  /* Main state */
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [amount, setAmount] = useState("");
  const [select, setSelect] = useState("Debt Consolidation");
  const [timeMoneyAnswer, setTimeMoneyAnswer] = useState("");
  const [creditScoreAnswer, setCreditScoreAnswer] = useState("");
  const [eMail, setEmail] = useState("");
  const [preTax, setPreTax] = useState("");
  const [coBorrower, setCoBorrower] = useState("");
  const [coBorrowerTax, setCoBorrowerTax] = useState("");
  const [cardDebit, setCardDebit] = useState("");
  const [cardUnsecuredDebit, setCardUnsecuredDebit] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [tel, setTel] = useState("");
  const [telCheckBox, setTelCheckBox] = useState(false);
  const [streetAdress, setStreetAdress] = useState("");
  const [apt, setApt] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [timeCurrentResidenceAnswer, setTimeCurrentResidenceAnswer] = useState("");
  /* End main state */

  /* question Name */
  const [questionName, setQuestionName] = useState(false);
  const [questionNameAnswer, setQuestionNameAnswer] = useState(false);
  const [questionNameWarning, setQuestionNameWarning] = useState(false);
  const [onClickOk, setOnClickOk] = useState(false);
  setTimeout(() => {setQuestionName(true)}, 1500);
  setTimeout(() => {setQuestionNameAnswer(true)}, 2500);
  setTimeout(() => {setQuestionNameWarning(true)}, 3500);
  /* end question Name */

  /* scroll name to amount */
  const myRef = useRef(null);
  const scrollToAmount = () => scrollToRef(myRef);
  const onClickAnswerName = (e) => {
    e.preventDefault();
    setOnClickOk(true);
    setTimeout(() => {
      scrollToAmount();
      setQuestionAmount(true);
    }, 500)
    setTimeout(() => {
      setQuestionAmountAnswer(true)
    }, 1000)
  }
  /* end scroll name to amount */

  /* question Amount */
  const [questionAmount, setQuestionAmount] = useState(false);
  const [questionAmountAnswer, setQuestionAmountAnswer] = useState(false);
  const [onClickAmountCheck, setOnClickAmountCheck] = useState(false);
  const myRef2 = useRef(null);
  const scrollToSelect = () => scrollToRef(myRef2);
  const onClickAnswerAmount = (e) => {
    setAmount(e.target.id);
    setTimeout(() => {
      setOnClickAmountCheck(true);
      scrollToSelect();
    }, 500)
    setTimeout(() => {
      setQuestionSelect(true);
    }, 700)
    setTimeout(() => {
      setQuestionSelectAnswer(true);
    }, 1000)
  }
  /* end question Amount */

  /* question Select */
  const [questionSelect, setQuestionSelect] = useState(false);
  const [questionSelectAnswer, setQuestionSelectAnswer] = useState(false);
  const [onClickSelectCheck, setOnClickSelectCheck] = useState(false);
  const myRef3 = useRef(null);
  const scrollToTimeMoney = () => scrollToRef(myRef3);
  const onClickSelectOk = () => {
    setTimeout(() => {
      setOnClickSelectCheck(true);
      scrollToTimeMoney();
    }, 500)
    setTimeout(() => {
      setQuestionTimeMoney(true);
    }, 700)
    setTimeout(() => {
      setQuestionTimeMoneyAnswer(true);
    }, 1000)
  }
  /* end question Select */

  /* set time money */
  const [questionTimeMoney, setQuestionTimeMoney] = useState(false);
  const [questionTimeMoneyAnswer, setQuestionTimeMoneyAnswer] = useState(false);
  const [onClickTimeMoneyCheck, setOnClickTimeMoneyCheck] = useState(false);
  const myRef4 = useRef(null);
  const scrollToCreditScore = () => scrollToRef(myRef4);
  const setTimeMoneyAnswerButton = (e) => {
    setTimeMoneyAnswer(e.target.id)
    setTimeout(() => {
      setOnClickTimeMoneyCheck(true);
      scrollToCreditScore();
    }, 500)
    setTimeout(() => {
      setQuestionCreditScore(true);
    }, 700)
    setTimeout(() => {
      setQuestionCreditScoreAnswer(true);
    }, 1000)
  }
  /* end set time money */

  /* set credit score */
  const [questionCreditScore, setQuestionCreditScore] = useState(false);
  const [questionCreditScoreAnswer, setQuestionCreditScoreAnswer] = useState(false);
  const [onClickCreditScoreCheck, setOnClickCreditScoreCheck] = useState(false);
  const myRef5 = useRef(null);
  const scrollToEmailAdress = () => scrollToRef(myRef5);
  const setCreditScoreAnswerButton = (e) => {
    setCreditScoreAnswer(e.target.id)
    setTimeout(() => {
      setOnClickCreditScoreCheck(true);
      scrollToEmailAdress();
    }, 500)
    setTimeout(() => {
      setQuestionEmailAdress(true);
    }, 700)
    setTimeout(() => {
      setQuestionEmailAdressAnswer(true);
    }, 1000)
  }
  /*end set credit score */

  /* set email adress */
  const [questionEmailAdress, setQuestionEmailAdress] = useState(false);
  const [questionEmailAdressAnswer, setQuestionEmailAdressAnswer] = useState(false);
  const [onClickPreTaxCheck, setOnClickPreTaxCheck] = useState(false);
  const myRef6 = useRef(null);
  const scrollToPreTax = () => scrollToRef(myRef6);
  const onClickEmailAdress = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOnClickPreTaxCheck(true);
      scrollToPreTax();
    }, 500)
    setTimeout(() => {
      setQuestionPreTax(true);
    }, 700)
    setTimeout(() => {
      setQuestionPreTaxAnswer(true);
    }, 1000)
  }
  /*end  set email adress */

  /* set pre tax */
  const [questionPreTax, setQuestionPreTax] = useState(false);
  const [questionPreTaxAnswer, setQuestionPreTaxAnswer] = useState(false);
  const [onClickCoBorrowerCheck, setOnClickCoBorrowerCheck] = useState(false);
  const myRef7 = useRef(null);
  const scrollCoBorrower = () => scrollToRef(myRef7);
  const onSbmituPreTaxForm = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOnClickCoBorrowerCheck(true);
      scrollCoBorrower();
    }, 500)
    setTimeout(() => {
      setQuestionCoBorrower(true);
    }, 700)
    setTimeout(() => {
      setQuestionCoBorrowerAnswer(true);
    }, 1000)
  }
  /*end set pre tax */

  /* set co-borrower */
  const [questionCoBorrower, setQuestionCoBorrower] = useState(false);
  const [questionCoBorrowerAnswer, setQuestionCoBorrowerAnswer] = useState(false);
  const [onClickCoBorrowerTaxCheck, setOnClickCoBorrowerTaxCheck] = useState(false);
  const myRef8 = useRef(null);
  const scrollTosetOnClickCoBorrowerTax = () => scrollToRef(myRef8);
  const onClickCoBorrower = (e) => {
    setCoBorrower(e.target.id)
    setTimeout(() => {
      setOnClickCoBorrowerTaxCheck(true);
      scrollTosetOnClickCoBorrowerTax();
    }, 500)
    setTimeout(() => {
      setQuestionCoBorrowerTax(true);
    }, 700)
    setTimeout(() => {
      setQuestionCoBorrowerTaxAnswer(true);
    }, 1000)
  }
  /* end co-borrower */

  /* set co-borrower tax */
  const [questionCoBorrowerTax, setQuestionCoBorrowerTax] = useState(false);
  const [questionCoBorrowerTaxAnswer, setQuestionCoBorrowerTaxAnswer] = useState(false);
  const [onClickCardDebitCheck, setOnClickCardDebitCheck] = useState(false);
  const myRef9 = useRef(null);
  const scrollToCardDebit = () => scrollToRef(myRef9);
  const onSubmitCoBorrowerTaxForm = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOnClickCardDebitCheck(true);
      scrollToCardDebit();
    }, 500)
    setTimeout(() => {
      setQuestionCardDebit(true);
    }, 700)
    setTimeout(() => {
      setQuestionCardDebitAnswer(true);
    }, 1000)
  }
  /*end set co-borrower tax */

  /* set card debit answer */
  const [questionCardDebit, setQuestionCardDebit] = useState(false);
  const [questionCardDebitAnswer, setQuestionCardDebitAnswer] = useState(false);
  const [onClickUnsecuredDebitCheck, setOnClickUnsecuredDebitCheck] = useState(false);
  const myRef10 = useRef(null);
  const scrollToUnsecuredDebit = () => scrollToRef(myRef10);
  const onClickCardDebit = (e) => {
    setCardDebit(e.target.id);
    setTimeout(() => {
      setOnClickUnsecuredDebitCheck(true);
      scrollToUnsecuredDebit();
    }, 500)
    setTimeout(() => {
      setQuestionUnsecuredDebit(true);
    }, 700)
    setTimeout(() => {
      setQuestionUnsecuredDebitAnswer(true)
    }, 1000)
  }
  /*end set card debit answer */

  /* set card Unsecured Debit */
  const [questionUnsecuredDebit, setQuestionUnsecuredDebit] = useState(false);
  const [questionUnsecuredDebitAnswer, setQuestionUnsecuredDebitAnswer] = useState(false);
  const [onClickMonthlyPaymentCheck, setOnClickMonthlyPaymentCheck] = useState(false);

  const myRef11 = useRef(null);
  const scrollToMonthlyPayment = () => scrollToRef(myRef11);

  const onClickUnsecuredDebit = (e) => {
    setCardUnsecuredDebit(e.target.id);
    setTimeout(() => {
      setOnClickMonthlyPaymentCheck(true);
      scrollToMonthlyPayment();
    }, 500)
    setTimeout(() => {
      setQuestionMonthlyPayment(true);
    }, 700)
    setTimeout(() => {
      setQuestionMonthlyPaymentAnswer(true)
    }, 1000)
  }
  /*end set card Unsecured Debit */

  /* set Monthly Payment */
  const [questionMonthlyPayment, setQuestionMonthlyPayment] = useState(false);
  const [questionMonthlyPaymentAnswer, setQuestionMonthlyPaymentAnswer] = useState(false);
  const [onClickTelCheck, setOnClickTelCheck] = useState(false);

  const myRef12 = useRef(null);
  const scrollToTel = () => scrollToRef(myRef12);

  const onClickMonthlyPayment = (e) => {
    setMonthlyPayment(e.target.id);
    setTimeout(() => {
      setOnClickTelCheck(true);
      scrollToTel();
    }, 500)
    setTimeout(() => {
      setQuestionTel(true);
    }, 700)
    setTimeout(() => {
      setQuestionTelAnswer(true)
    }, 1000)
  }

  /* end Monthly Payment  */

  /* set tel */
  const [questionTel, setQuestionTel] = useState(false);
  const [questionTelAnswer, setQuestionTelAnswer] = useState(false);
  const [onClickAdressCheck, setOnClickAdressCheck] = useState(false);

  const myRef13 = useRef(null);
  const scrollToAdress = () => scrollToRef(myRef13);

  const onSubmitTelForm = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOnClickAdressCheck(true);
      scrollToAdress();
    }, 500)
    setTimeout(() => {
      setQuestionAdress(true);
    }, 700)
    setTimeout(() => {
      setQuestionAdress2(true);
    }, 1100)
    setTimeout(() => {
      setQuestionAdressAnswer(true);
    }, 1500)
  }
  /* end set tel */

  /* set adress */
  const [questionAdress, setQuestionAdress] = useState(false);
  const [questionAdress2, setQuestionAdress2] = useState(false);
  const [questionAdressAnswer, setQuestionAdressAnswer] = useState(false);

  const [onClickTimeCurrentResidenceCheck, setOnClickTimeCurrentResidenceCheck] = useState(false);

  const myRef14 = useRef(null);
  const scrollToTimeCurrentResidence = () => scrollToRef(myRef14);

  const onSubmitAdressForm = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOnClickTimeCurrentResidenceCheck(true);
      scrollToTimeCurrentResidence();
    }, 500)
    setTimeout(() => {
      setTimeCurrentResidence(true);
    }, 700)
    setTimeout(() => {
      setQuestionTimeCurrentResidenceAnswer(true);
    }, 1000)
  }
  /* end set adress */

  /* set time current residence */
  const [questionTimeCurrentResidence, setTimeCurrentResidence] = useState(false);
  const [questionTimeCurrentResidenceAnswer, setQuestionTimeCurrentResidenceAnswer] = useState(false);
  const [onClickHomeownerAnswerCheck, setOnClickHomeownerAnswerCheck] = useState(false);
  const myRef15 = useRef(null);
  const scrollToHomeowner = () => scrollToRef(myRef15);

  const setTimeCurrentResidenceAnswerButton = (e) => {
    setTimeCurrentResidenceAnswer(e.target.id)
    setTimeout(() => {
      setOnClickHomeownerAnswerCheck(true);
      scrollToHomeowner();
    }, 500)
    setTimeout(() => {
      setHomeowner(true);
    }, 700)
    setTimeout(() => {
      setQuestionHomeownerAnswer(true);
    }, 1000)
  }

  /*end set time current residence */

  /* set Homeowner */
  const [questionHomeowner, setHomeowner] = useState(false);
  const [questionHomeownerAnswer, setQuestionHomeownerAnswer] = useState(false);
  /* end set Homeowner */

  return (
  <section className="mainSection">

    <div className="mainSection__chat chat">
      <div className={questionName ? "chat__question" : "chat__question chat__question-disable"}>
        <div className="chat__question-ploto-block">
          <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
        </div>
        <div className="chat__question-text">
          <p>Hi! My name is Michaella and I will be you personal assistant today.</p>
          <p>To get started: what's your full name?</p>
        </div>
      </div>








      <div className="mainSection__answer answer">
        <form onSubmit={(e) => onClickAnswerName(e)}className={questionNameAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
          <input value={name} required onChange={(e) => setName(e.target.value)} className="answer__input" type="name" type="text" placeholder="First Name"></input>
          <input value={surName} required onChange={(e) => setSurName(e.target.value)} className="answer__input" type="surname" type="text" placeholder="Last Name"></input>
          <button className="answer__button" type="submit">OK</button>
        </form>
      </div>

      <div ref={myRef}>
        {onClickOk &&
        <>
        <div className={questionAmount ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>What's the amount you are looking for?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionAmountAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <button onClick={(e) => onClickAnswerAmount(e)} className={amount === "$100-$425" ? "answer__button answer-amount__button answer-amount__button-active" : "answer__button answer-amount__button"} type="button" id="$100-$425">$100 - $425</button>
            <button onClick={(e) => onClickAnswerAmount(e)} className={amount === "$425-$1000" ? "answer__button answer-amount__button answer-amount__button-active" : "answer__button answer-amount__button"} type="button" id="$425-$1000">$425 - $1000</button>
            <button onClick={(e) => onClickAnswerAmount(e)} className={amount === "$1000-$3025" ? "answer__button answer-amount__button answer-amount__button-active" : "answer__button answer-amount__button"} type="button" id="$1000-$3025">$1000 - $3025</button>
          </div>
        </div>
        </>
        }
      </div>
      <div ref={myRef2}>
      {onClickAmountCheck &&
      <>
        <div className={questionSelect ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>If you don't mind, could I ask what's the purpose for this loan?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionSelectAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <select onChange={(e) => setSelect(e.target.value)} className="custom-select custom-select-lg mb-3">
              <option value="Debt Consolidation">Debt Consolidation</option>
              <option value="Pay Off Credit Cards">Pay Off Credit Cards</option>
              <option value="Home Improvement">Home Improvement</option>
              <option value="Home Buying">Home Buying</option>
              <option value="Major Purchase">Major Purchase</option>
              <option value="Car Financing">Car Financing</option>
              <option value="Business">Business</option>
              <option value="Vacation">Vacation</option>
              <option value="Wedding Expenses">Wedding Expenses</option>
              <option value="Moving and Relocation">Moving and Relocation</option>
              <option value="Medical Expenses">Medical Expenses</option>
              <option value="Other">Other</option>
            </select>
            <button onClick={() => onClickSelectOk()} className="answer__button" type="button">OK</button>
          </div>
        </div>
        </>
        }
      </div>
      <div ref={myRef3}>
      {onClickSelectCheck &&
      <>
        <div className={questionTimeMoney ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>How quickly do you need the money?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionTimeMoneyAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={timeMoneyAnswer === "Within-48-hours" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"} onClick={(e) => setTimeMoneyAnswerButton(e)} id="Within-48-hours" type="button">Within <br></br> 48 hours</button>
              <button className={timeMoneyAnswer === "Within-2-weeks" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeMoneyAnswerButton(e)} id="Within-2-weeks" type="button">Within <br></br> 2 weeks</button>
            </div>
            <div className="timeMoney-block">
              <button className={timeMoneyAnswer === "Within-a-month" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeMoneyAnswerButton(e)} id="Within-a-month" type="button">Within <br></br> a month</button>
              <button className={timeMoneyAnswer === "Unsure-just-browsing-rates" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeMoneyAnswerButton(e)} id="Unsure-just-browsing-rates">Unsure, just <br></br> browsing rates</button>
            </div>
          </div>
        </div>
      </>
      }
      </div>


      <div ref={myRef4}>
      {onClickTimeMoneyCheck &&
      <>
        <div className={questionCreditScore ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>What's your credit score?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionCreditScoreAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={creditScoreAnswer === "Excellent" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"} onClick={(e) => setCreditScoreAnswerButton(e)} id="Excellent" type="button">Excellent <br></br> (720-850)</button>
              <button className={creditScoreAnswer === "Good" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setCreditScoreAnswerButton(e)} id="Good" type="button">Good <br></br> (680-719)</button>
            </div>
            <div className="timeMoney-block">
              <button className={creditScoreAnswer === "Fair" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setCreditScoreAnswerButton(e)} id="Fair" type="button">Fair <br></br> (640-679)</button>
              <button className={creditScoreAnswer === "Poor" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setCreditScoreAnswerButton(e)} id="Poor" type="button">Poor <br></br> (0-639)</button>
            </div>
          </div>
        </div>
      </>
      }
      </div>


      <div ref={myRef5}>
      {onClickCreditScoreCheck &&
      <>
        <div className={questionEmailAdress ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Email Address</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onClickEmailAdress(e)} className={questionEmailAdressAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <input value={eMail} required onChange={(e) => setEmail(e.target.value)} className="answer__input" type="email" placeholder="Email"></input>
            <p>
              By clicking the link, you assent to the terms. You acknowledge you have read this information about electronic signatures, records, disclosures, and doing business electronically. You consent to using electronic signatures, having all disclosures provided or made available to you in electronic form and to doing business with the lender or lending partner electronically. You acknowledge that you may request a paper copy of the electronic records and disclosures, which will be provided to you at no charge. If you refrain from proceeding then you neither wish to use electronic signatures nor conduct this transaction electronically. You also acknowledge that your consent to electronic disclosures is required to receive services from third party lenders or lending partners over the internet.
            </p>
            <button className="answer__button" type="submit">OK</button>
          </form>
        </div>
      </>
      }
      </div>
      <div ref={myRef6}>
      {onClickPreTaxCheck &&
      <>
        <div className={questionPreTax ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>What's your yearly pre-tax income?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onSbmituPreTaxForm(e)} className={questionPreTaxAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <span className="preTaxSpan">$</span>
            <input value={preTax.toNumber} required onChange={(e) => setPreTax(e.target.value)} className="answer__input" type="number" placeholder="0"></input>
            <button className="answer__button" type="submit">OK</button>
          </form>
        </div>
      </>
      }
      </div>
      <div ref={myRef7}>
      {onClickCoBorrowerCheck &&
      <>
        <div className={questionCoBorrower ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Your co-borrower's yearly pre-tax income?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div  className={questionCoBorrowerAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={coBorrower === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickCoBorrower(e)} id="Yes" type="button">YES</button>
              <button className={coBorrower === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickCoBorrower(e)} id="No" type="button">NO</button>
            </div>
           </div>
        </div>
      </>
      }
      </div>
      <div className="coBorrowed" ref={myRef8}>
      {onClickCoBorrowerTaxCheck &&
      <>
        <div className={questionCoBorrowerTax ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Are you adding a co-borrower?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onSubmitCoBorrowerTaxForm(e)} className={questionCoBorrowerTaxAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <span className="preTaxSpan">$</span>
            <input value={coBorrowerTax} required onChange={(e) => setCoBorrowerTax(e.target.value)} className="answer__input" type="number" placeholder="0"></input>
            <button className="answer__button" type="submit">OK</button>
           </form>
        </div>

        <div className={questionCoBorrowerTaxAnswer ? "coBorrowed-attention" : "coBorrowed-attention coBorrowed-attention-disable"}>
          <img src="./img/ic_attention.png" alt="attention"></img>
          <span>With a co-borrower you could:<br></br><br></br>

          - Get more loan offers<br></br>
          - Get lower interest rates<br></br>
          - Save more over the life of the loan</span>
        </div>
      </>
      }
      </div>
      <div ref={myRef9}>
      {onClickCardDebitCheck &&
      <>
        <div className={questionCardDebit ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Do you have $10,000 or more in credit card debt?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionCardDebitAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={cardDebit === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickCardDebit(e)} id="Yes" type="button">YES</button>
              <button className={cardDebit === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickCardDebit(e)} id="No" type="button">NO</button>
            </div>
           </div>
        </div>
      </>
      }
      </div>
      <div ref={myRef10}>
      {onClickUnsecuredDebitCheck &&
      <>
        <div className={questionUnsecuredDebit ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Do you have $10,000 or more in unsecured debt?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionUnsecuredDebitAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={cardUnsecuredDebit === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickUnsecuredDebit(e)} id="Yes" type="button">YES</button>
              <button className={cardUnsecuredDebit === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickUnsecuredDebit(e)} id="No" type="button">NO</button>
            </div>
           </div>
        </div>
      </>
      }
      </div>
      <div ref={myRef11}>
      {onClickMonthlyPaymentCheck &&
      <>
        <div className={questionMonthlyPayment ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Can you afford an aggregated monthly payment of every pay check around $250?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionMonthlyPaymentAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={monthlyPayment === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickMonthlyPayment(e)} id="Yes" type="button">YES</button>
              <button className={monthlyPayment === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickMonthlyPayment(e)} id="No" type="button">NO</button>
            </div>
           </div>
        </div>
      </>
      }
      </div>


      <div className="coBorrowed" ref={myRef12}>
      {onClickTelCheck &&
      <>
        <div className={questionTel ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>What's the phone number we can use for lenders to get in touch with you?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onSubmitTelForm(e)} className={questionTelAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <input value={tel.toNumber} required onChange={(e) => setTel(e.target.value)} className="answer__input" name="tel" type="number" placeholder="Phone Number"></input>

            <div className="telInput">
              <input value={telCheckBox} onChange={() => setTelCheckBox(!telCheckBox)} className="telInput__checkbox" id="check" type="checkbox"></input>
              <label htmlFor="check">By entering your phone number, I affirm that I have read, understand, and agree to the Disclaimer, Privacy Policy and Terms of Use, my click is my electronic signature, and I authorize you to share my information with lenders and other partners in order to receive a loan and accept that getfundsasap.com might use SMS/MMS messaging, autodialers or prerecorded messages to call or text me on my mobile phone or landline. I understand consent is not required to obtain a loan. I further understand that I have no obligation to accept a loan once I am connected with an available lender.</label>
            </div>

            <button className="answer__button" type="submit">OK</button>
          </form>
        </div>

        <div className={questionTelAnswer ? "coBorrowed-attention" : "coBorrowed-attention coBorrowed-attention-disable"}>
          <div>
            <img src="./img/ic_attention.png" alt="attention"></img>
          </div>
          <span>Why do we require this? <br></br>
          Some lenders will quickly confirm your application by phone.</span>
        </div>
      </>
      }
      </div>



      <div ref={myRef13}>
      {onClickAdressCheck &&
      <>
        <div className={questionAdress ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>We almost there few questions left</p>
          </div>
        </div>

        <div className={questionAdress2 ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>What is your street address?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onSubmitAdressForm(e)} className={questionAdressAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="adress__inputs">
              <input value={streetAdress} onChange={(e) => setStreetAdress(e.target.value)} required className="answer__input adress__input-text" type="text" placeholder="Street address"></input>
              <input value={apt} onChange={(e) => setApt(e.target.value)} required className="answer__input adress__input-num" type="number" placeholder="Apt #"></input>
            </div>
            <input value={zipCode} onChange={(e) => setZipCode(e.target.value)} required className="answer__input adress__input-zip" type="number" placeholder="Zip-code"></input>
            <button className="answer__button" type="submit">OK</button>
          </form>
        </div>

      </>
      }
      </div>




      <div ref={myRef14}>
      {onClickTimeCurrentResidenceCheck &&
      <>
        <div className={questionTimeCurrentResidence ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Time at Current Residence</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionTimeCurrentResidenceAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={timeCurrentResidenceAnswer === "5+Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"} onClick={(e) => setTimeCurrentResidenceAnswerButton(e)} id="5+Years" type="button">5+<br></br> Years</button>
              <button className={timeCurrentResidenceAnswer === "3to5Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeCurrentResidenceAnswerButton(e)} id="3to5Years" type="button">3 to 5 <br></br> Years</button>
            </div>
            <div className="timeMoney-block">
              <button className={timeCurrentResidenceAnswer === "2to3Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeCurrentResidenceAnswerButton(e)} id="2to3Years" type="button">2 to 3 <br></br> Years</button>
              <button className={timeCurrentResidenceAnswer === "1to2Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeCurrentResidenceAnswerButton(e)} id="1to2Years" type="button">1 to 2 <br></br> Years</button>
            </div>
            <div className="timeMoney-block">
              <button className={timeCurrentResidenceAnswer === "7to12Months" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeCurrentResidenceAnswerButton(e)} id="7to12Months" type="button">7 to 12 <br></br> Months</button>
              <button className={timeCurrentResidenceAnswer === "1to6Months" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeCurrentResidenceAnswerButton(e)} id="1to6Months" type="button">1 to 6 <br></br> Months</button>
            </div>
          </div>
        </div>
      </>
      }
      </div>


      <div ref={myRef15}>
      {onClickHomeownerAnswerCheck &&
      <>
        <div className={questionHomeowner ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Are You a Homeowner?</p>
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionHomeownerAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={monthlyPayment === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickMonthlyPayment(e)} id="Yes" type="button">YES</button>
              <button className={monthlyPayment === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickMonthlyPayment(e)} id="No" type="button">NO</button>
            </div>
           </div>
        </div>
      </>
      }
      </div>




    </div>

    <div className="mainSection__description description">

      <div className={questionNameWarning ? "description__nameQuestion" : "description__nameQuestion description__nameQuestion-disable" }>
        <img src="./img/ic_attention.png" alt="attention"></img>
        <span>Entering your full legal name may increase your chances of approval</span>
      </div>

    </div>


  </section>
  );
}

export default MainSection;
