import React, { useState, useRef, useEffect } from 'react';

import './MainSection.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Timer from '../Timer/Timer';

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
  const [eMailVerify, setEmailVerify] = useState("");
  const [checkEmail, setChekEmail] = useState(false);

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
  const [homeownerAnswer, setHomeownerAnswer] = useState("");
  const [militarryAnswer, setMilitarryAnswerAnswer] = useState("");
  const [driverLicenseAnswer, setDriverLicenseAnswer] = useState("");
  const [driverLicenseStateAnswer, setDriverLicenseStateAnswer] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [incomeTypeAnswer, setIncomeTypeAnswer] = useState("");
  const [payOutTypeTypeOfBenefits, setPayOutTypeTypeOfBenefits] = useState("");
  const [monthlyIncome, setMonthlyIncome] =useState("");
  const [employerNameIncomeSourse, setEmployerNameIncomeSourse] = useState("");
  const [employerPhone, setEmployerPhone] = useState("");
  const [employerPhoneExt, setEmployerPhoneExt] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [timeEmployed, setTimeEmployed] = useState("");
  const [paycheckReceived, setPaycheckReceived] = useState("");
  const [howOftenAreYouPaid, setHowOftenAreYouPaid] = useState("");
  const [nextPaydate, setNextPaydate] = useState("");
  const [abaRouting, setAbaRouting] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [typeOfBankAccount, setTypeOfBankAccount] = useState("");
  const [timeWithBankAccount, setTimeWithBankAccount] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
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

  const mailValidation = /^.+@.+\..+$/igm;

  const onClickEmailAdress = () => {
    if (mailValidation.test(eMail)) {
      setChekEmail(false);
      setOnClickPreTaxCheck(true);
      scrollToPreTax();
      setEmailVerify(eMail);
      setTimeout(() => {
        setQuestionPreTax(true);
      }, 700)
      setTimeout(() => {
        setQuestionPreTaxAnswer(true);
      }, 1000)
    } else {
      setChekEmail(true);
    }
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
  const [onClickMilitaryCheck, setOnClickMilitaryCheck] = useState(false);

  const myRef16 = useRef(null);
  const scrollToMilitary = () => scrollToRef(myRef16);

  const onClickHomeowner = (e) => {
    setHomeownerAnswer(e.target.id);
    setTimeout(() => {
      setOnClickMilitaryCheck(true);
      scrollToMilitary();
    }, 500)
    setTimeout(() => {
      setMilitary(true);
    }, 700)
    setTimeout(() => {
      setQuestionMilitaryAnswer(true)
    }, 1000)
  }
  /* end set Homeowner */

  /* set Military */
  const [questionMilitary, setMilitary] = useState(false);
  const [questionMilitaryAnswer, setQuestionMilitaryAnswer] = useState(false);
  const [onClickDriversLicenseCheck, setOnClickDriversLicenseCheck] = useState(false);
  const myRef17 = useRef(null);
  const scrollToDriversLicense = () => scrollToRef(myRef17);

  const onClickMilitary = (e) => {
    setMilitarryAnswerAnswer(e.target.id);
    setTimeout(() => {
      setOnClickDriversLicenseCheck(true);
      scrollToDriversLicense();
    }, 500)
    setTimeout(() => {
      setDriversLicense(true);
    }, 700)
    setTimeout(() => {
      setQuestionDriversLicenseAnswer(true)
    }, 1000)
  }
  /* end set Military */

  /* set Drivers License */
  const [questionDriversLicense, setDriversLicense] = useState(false);
  const [questionDriversLicenseAnswer, setQuestionDriversLicenseAnswer] = useState(false);

  const [onClickDateOfBirthCheck, setOnClickDateOfBirthCheck] = useState(false);

  const myRef18 = useRef(null);
  const scrollToDateOfBirth = () => scrollToRef(myRef18);

  const onSubmitDriversLicenseForm = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOnClickDateOfBirthCheck(true);
      scrollToDateOfBirth();
    }, 500)
    setTimeout(() => {
      setQuestionDateOfBirth(true);
    }, 700)
    setTimeout(() => {
      setQuestionDateOfBirthAnswer(true);
    }, 1000)
  }
  /* end Drivers License */

  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    // eslint-disable-next-line
    setCurrentDate(year + "-" + `${month > 9 ? month : "0" + month}` + "-" + `${day > 9 ? day : "0" + day}`)
  });

  /* set Date of Birth */
  const [questionDateOfBirth, setQuestionDateOfBirth] = useState(false);
  const [questionDateOfBirthAnswer, setQuestionDateOfBirthAnswer] = useState(false);
  const [onClickIncomeTypeCheck, setOnClickIncomeTypeCheck] = useState(false);
  const myRef19 = useRef(null);
  const scrollToIncomeType = () => scrollToRef(myRef19);

  const onClickDateOfBirth = () => {
    setTimeout(() => {
      setOnClickIncomeTypeCheck(true);
      scrollToIncomeType();
    }, 500)
    setTimeout(() => {
      setQuestionIncomeType(true);
    }, 700)
    setTimeout(() => {
      setQuestionIncomeTypeAnswer(true)
    }, 1000)
  }
  /* end set Date of Birth */

  /* set Income Type */
  const [questionIncomeType, setQuestionIncomeType] = useState(false);
  const [questionIncomeTypeAnswer, setQuestionIncomeTypeAnswer] = useState(false);

  const [onClickPayoutTypeCheck, setOnClickPayoutTypeCheck] = useState(false);
  const myRef20 = useRef(null);
  const scrollToPayoutType = () => scrollToRef(myRef20);

  const onClickIncomeTypeAnswerButton = (e) => {
    setIncomeTypeAnswer(e);
    setTimeout(() => {
      setOnClickPayoutTypeCheck(true);
      scrollToPayoutType();
    }, 500)
    setTimeout(() => {
      setQuestionPayoutType(true);
    }, 700)
    setTimeout(() => {
      setQuestionPayoutTypeAnswer(true)
    }, 1000)
  }
  /* end set Income Type */

  /* set Payout Type */
  const [questionPayoutType, setQuestionPayoutType] = useState(false);
  const [questionPayoutTypeAnswer, setQuestionPayoutTypeAnswer] = useState(false);

  const [onClickMonthlyIncomeCheck, setOnMonthlyIncomeCheck] = useState(false);
  const myRef21 = useRef(null);
  const scrollToMonthlyIncome = () => scrollToRef(myRef21);

  const onClickPayoutTypeButton = (e) => {
    setPayOutTypeTypeOfBenefits(e);
    setTimeout(() => {
      setOnMonthlyIncomeCheck(true);
      scrollToMonthlyIncome();
    }, 500)
    setTimeout(() => {
      setQuestionMonthlyIncome(true);
    }, 700)
    setTimeout(() => {
      setQuestionMonthlyIncomeAnswer(true)
    }, 1000)
  }
  /* end set Payout Type */

  /* set Monthly Income */
  const [questionMonthlyIncome, setQuestionMonthlyIncome] = useState(false);
  const [questionMonthlyIncomeAnswer, setQuestionMonthlyIncomeAnswer] = useState(false);

  const [onClickEmployerNameIncomeSourceCheck, setOnClickEmployerNameIncomeSourceCheck] = useState(false);
  const myRef22 = useRef(null);
  const scrollToEmployerNameIncomeSource = () => scrollToRef(myRef22);

  const onClickMonthlyIncomeButton = (e) => {
    setMonthlyIncome(e);
    setTimeout(() => {
      setOnClickEmployerNameIncomeSourceCheck(true);
      scrollToEmployerNameIncomeSource();
    }, 500)
    setTimeout(() => {
      setQuestionEmployerNameIncome(true);
    }, 700)
    setTimeout(() => {
      setQuestionEmployerNameIncomeAnswer(true)
    }, 1000)
  }
  /* end set Monthly Income */

  /* set Employer Name Income Source */
  const [questionEmployerNameIncome, setQuestionEmployerNameIncome] = useState(false);
  const [questionEmployerNameIncomeAnswer, setQuestionEmployerNameIncomeAnswer] = useState(false);

  const [onClickEmployerPhoneCheck, setOnClickEmployerPhoneCheck] = useState(false);
  const myRef23 = useRef(null);
  const scrollToEmployerPhone = () => scrollToRef(myRef23);

  const onClickEmployerNameIncome = (e) => {
    setTimeout(() => {
      setOnClickEmployerPhoneCheck(true);
      scrollToEmployerPhone();
    }, 500)
    setTimeout(() => {
      setQuestionEmployerPhone(true);
    }, 700)
    setTimeout(() => {
      setQuestionEmployerPhoneAnswer(true)
    }, 1000)
  }
  /* end set Employer Name Income Source */

  /* set Employer Phone */
  const [questionEmployerPhone, setQuestionEmployerPhone] = useState(false);
  const [questionEmployerPhoneAnswer, setQuestionEmployerPhoneAnswer] = useState(false);

  const [onClickJobTitleCheck, setOnClickJobTitleCheck] = useState(false);

  const myRef24 = useRef(null);
  const scrollToJobTitle = () => scrollToRef(myRef24);

  const onSubmitEmployerPhoneForm = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOnClickJobTitleCheck(true);
      scrollToJobTitle();
    }, 500)
    setTimeout(() => {
      setQuestionJobTitle(true);
    }, 700)
    setTimeout(() => {
      setQuestionJobTitleAnswer(true);
    }, 1000)
  }
  /*end set Employer Phone */

  /* set Job Title */
  const [questionJobTitle, setQuestionJobTitle] = useState(false);
  const [questionJobTitleAnswer, setQuestionJobTitleAnswer] = useState(false);

  const [onClickTimeEmployedCheck, setOnClickTimeEmployedCheck] = useState(false);

  const myRef25 = useRef(null);
  const scrollToTimeEmployed = () => scrollToRef(myRef25);

  const onSubmitJobTitleForm = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOnClickTimeEmployedCheck(true);
      scrollToTimeEmployed();
    }, 500)
    setTimeout(() => {
      setQuestionTimeEmployed(true);
    }, 700)
    setTimeout(() => {
      setQuestionTimeEmployedAnswer(true);
    }, 1000)
  }
  /* end set Job Title */

  /* set time employed */
  const [questionTimeEmployed, setQuestionTimeEmployed] = useState(false);
  const [questionTimeEmployedAnswer, setQuestionTimeEmployedAnswer] = useState(false);

  const [onClickPaycheckReceivedCheck, setOnClickPaycheckReceivedCheck] = useState(false);
  const myRef26 = useRef(null);
  const scrollToPaycheckReceived = () => scrollToRef(myRef26);

  const onClickTimeEmployedButton = (e) => {
    setTimeEmployed(e);
    setTimeout(() => {
      setOnClickPaycheckReceivedCheck(true);
      scrollToPaycheckReceived();
    }, 500)
    setTimeout(() => {
      setQuestionPaycheckReceived(true);
    }, 700)
    setTimeout(() => {
      setQuestionPaycheckReceivedAnswer(true)
    }, 1000)
  }
  /*end set time employed */

  /* set Paycheck Received */
  const [questionPaycheckReceived, setQuestionPaycheckReceived] = useState(false);
  const [questionPaycheckReceivedAnswer, setQuestionPaycheckReceivedAnswer] = useState(false);

  const [onClickHowOftenAreYouPaidCheck, setOnClickHowOftenAreYouPaidCheck] = useState(false);
  const myRef27 = useRef(null);
  const scrollToHowOftenAreYouPaid = () => scrollToRef(myRef27);

  const onClickPaycheckReceivedButton = (e) => {
    setPaycheckReceived(e);
    setTimeout(() => {
      setOnClickHowOftenAreYouPaidCheck(true);
      scrollToHowOftenAreYouPaid();
    }, 500)
    setTimeout(() => {
      setQuestionHowOftenAreYouPaid(true);
    }, 700)
    setTimeout(() => {
      setQuestionHowOftenAreYouPaidAnswer(true)
    }, 1000)
  }
  /* end set Paycheck Received */

  /*set HowOftenAreYouPaid */
  const [questionHowOftenAreYouPaid, setQuestionHowOftenAreYouPaid] = useState(false);
  const [questionHowOftenAreYouPaidAnswer, setQuestionHowOftenAreYouPaidAnswer] = useState(false);

  const [onClickNextPaydateCheck, setOnClickNextPaydateCheck] = useState(false);
  const myRef28 = useRef(null);
  const scrollToNextPaydate = () => scrollToRef(myRef28);

  const onClickHowOftenAreYouPaidButton = (e) => {
    setHowOftenAreYouPaid(e);
    setTimeout(() => {
      setOnClickNextPaydateCheck(true);
      scrollToNextPaydate();
    }, 500)
    setTimeout(() => {
      setQuestionNextPaydate(true);
    }, 700)
    setTimeout(() => {
      setQuestionNextPaydateAnswer(true)
    }, 1000)
  }
  /* end set HowOftenAreYouPaid */

  /* set Next Paydate */
  const [questionNextPaydate, setQuestionNextPaydate] = useState(false);
  const [questionNextPaydateAnswer, setQuestionNextPaydateAnswer] = useState(false);

  const [onClickDepositDetailsCheck, setOnClickDepositDetailsCheck] = useState(false);
  const myRef29 = useRef(null);
  const scrollToDepositDetails = () => scrollToRef(myRef29);

  const onClickNextPaydateButton = () => {
    setTimeout(() => {
      setOnClickDepositDetailsCheck(true);
      scrollToDepositDetails();
    }, 500)
    setTimeout(() => {
      setQuestionDepositDetails(true);
    }, 700)
    setTimeout(() => {
      setQuestionDepositDetailsAnswer(true)
    }, 1000)
  }
  /* end set Next Paydate */

  /* Deposit Details */
  const [questionDepositDetails, setQuestionDepositDetails] = useState(false);
  const [questionDepositDetailsAnswer, setQuestionDepositDetailsAnswer] = useState(false);

  const [onClickTypeOfBankAccountCheck, setOnClickTypeOfBankAccountCheck] = useState(false);

  const myRef30 = useRef(null);
  const scrollToTypeOfBankAccount = () => scrollToRef(myRef30);

  const onSubmitDepositDetailsForm = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOnClickTypeOfBankAccountCheck(true);
      scrollToTypeOfBankAccount();
    }, 500)
    setTimeout(() => {
      setQuestionTypeOfBankAccount(true);
    }, 700)
    setTimeout(() => {
      setQuestionTypeOfBankAccountAnswer(true);
    }, 1000)
  }
  /* end Deposit Details */

  /* set TypeOfBankAccount */
  const [questionTypeOfBankAccount, setQuestionTypeOfBankAccount] = useState(false);
  const [questionTypeOfBankAccountAnswer, setQuestionTypeOfBankAccountAnswer] = useState(false);

  const [onClickTimeWithBankAccountCheck, setOnClickTimeWithBankAccountCheck] = useState(false);
  const myRef31 = useRef(null);
  const scrollToTimeWithBankAccount = () => scrollToRef(myRef31);

  const onClickTypeOfBankAccountButton = (e) => {
    setTypeOfBankAccount(e);
    setTimeout(() => {
      setOnClickTimeWithBankAccountCheck(true);
      scrollToTimeWithBankAccount();
    }, 500)
    setTimeout(() => {
      setQuestionTimeWithBankAccount(true);
    }, 700)
    setTimeout(() => {
      setQuestionTimeWithBankAccountAnswer(true)
    }, 1000)
  }
  /* end set TypeOfBankAccount */

  /* set Time With Bank Account */
  const [questionTimeWithBankAccount, setQuestionTimeWithBankAccount] = useState(false);
  const [questionTimeWithBankAccountAnswer, setQuestionTimeWithBankAccountAnswer] = useState(false);

  const [onClickSocialSecurityNumberCheck, setOnClickSocialSecurityNumberCheck] = useState(false);
  const myRef32 = useRef(null);
  const scrollToSocialSecurityNumber = () => scrollToRef(myRef32);

  const setTimeWithBankAccountButton = (e) => {
    setTimeWithBankAccount(e.target.id)
    setTimeout(() => {
      setOnClickSocialSecurityNumberCheck(true);
      scrollToSocialSecurityNumber();
    }, 500)
    setTimeout(() => {
      setQuestionSocialSecurityNumber(true);
    }, 700)
    setTimeout(() => {
      setQuestionSocialSecurityNumberAnswer(true);
    }, 1000)
  }
  /* end set Time With Bank Account */

  /* set SocialSecurityNumber */
  const [questionSocialSecurityNumber, setQuestionSocialSecurityNumber] = useState(false);
  const [questionSocialSecurityNumberAnswer, setQuestionSocialSecurityNumberAnswer] = useState(false);
  const history = useHistory();
  const onSubmitSocialSecurityNumberForm = (e) => {
    e.preventDefault();
    const DATA = JSON.stringify({
      name: name,
      surName: surName,
      amount: amount,
      select: select,
      timeMoneyAnswer: timeMoneyAnswer,
      creditScoreAnswer: creditScoreAnswer,
      eMail: eMailVerify,
      preTax: preTax,
      coBorrower: coBorrower,
      coBorrowerTax: coBorrowerTax,
      cardDebit: cardDebit,
      cardUnsecuredDebit: cardUnsecuredDebit,
      monthlyPayment: monthlyPayment,
      tel: tel,
      telCheckBox: telCheckBox,
      streetAdress: streetAdress,
      apt: apt,
      zipCode: zipCode,
      timeCurrentResidenceAnswer: timeCurrentResidenceAnswer,
      homeownerAnswer: homeownerAnswer,
      militarryAnswer: militarryAnswer,
      driverLicenseAnswer: driverLicenseAnswer,
      driverLicenseStateAnswer: driverLicenseStateAnswer,
      dateOfBirth: dateOfBirth,
      incomeTypeAnswer: incomeTypeAnswer,
      payOutTypeTypeOfBenefits: payOutTypeTypeOfBenefits,
      monthlyIncome: monthlyIncome,
      employerNameIncomeSourse: employerNameIncomeSourse,
      employerPhone: employerPhone,
      employerPhoneExt: employerPhoneExt,
      jobTitle: jobTitle,
      timeEmployed: timeEmployed,
      paycheckReceived: paycheckReceived,
      howOftenAreYouPaid: howOftenAreYouPaid,
      nextPaydate: nextPaydate,
      abaRouting: abaRouting,
      accountNumber: accountNumber,
      typeOfBankAccount: typeOfBankAccount,
      timeWithBankAccount: timeWithBankAccount,
      socialSecurityNumber: socialSecurityNumber,
    })
    axios.post('/register.php', DATA)
    .then(function (response) {
      console.log(response.json())
    })
    .catch(function (error) {
      console.log(error);
    });
    history.push("/home");
  }
  /* end set SocialSecurityNumber */

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
          <Timer />
        </div>
      </div>

      <div className="mainSection__answer answer">
        <form onSubmit={(e) => onClickAnswerName(e)}className={questionNameAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
          <input value={name} required onChange={(e) => setName(e.target.value)} className="answer__input" type="name" type="text" placeholder="First Name"></input>
          <input value={surName} required onChange={(e) => setSurName(e.target.value)} className="answer__input" type="surname" type="text" placeholder="Last Name"></input>
          <button className="answer__button" type="submit">OK</button>
          <Timer />
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
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionAmountAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <button onClick={(e) => onClickAnswerAmount(e)} className={amount === "$100-$425" ? "answer__button answer-amount__button answer-amount__button-active" : "answer__button answer-amount__button"} type="button" id="$100-$425">$100 - $425</button>
            <button onClick={(e) => onClickAnswerAmount(e)} className={amount === "$425-$1000" ? "answer__button answer-amount__button answer-amount__button-active" : "answer__button answer-amount__button"} type="button" id="$425-$1000">$425 - $1000</button>
            <button onClick={(e) => onClickAnswerAmount(e)} className={amount === "$1000-$3025" ? "answer__button answer-amount__button answer-amount__button-active" : "answer__button answer-amount__button"} type="button" id="$1000-$3025">$1000 - $3025</button>
            <Timer />
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
            <Timer />
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
            <Timer />
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
            <Timer />
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
            <Timer />
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
            <Timer />
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
            <Timer />
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
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionEmailAdressAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <span className={checkEmail ? "span-error" : "span-no-error"}>Enter correct Email</span>
            <input value={eMail} required onChange={(e) => setEmail(e.target.value)} className="answer__input" type="email" placeholder="Email"></input>
            <p>
              By clicking the link, you assent to the terms. You acknowledge you have read this information about electronic signatures, records, disclosures, and doing business electronically. You consent to using electronic signatures, having all disclosures provided or made available to you in electronic form and to doing business with the lender or lending partner electronically. You acknowledge that you may request a paper copy of the electronic records and disclosures, which will be provided to you at no charge. If you refrain from proceeding then you neither wish to use electronic signatures nor conduct this transaction electronically. You also acknowledge that your consent to electronic disclosures is required to receive services from third party lenders or lending partners over the internet.
            </p>
            <button onClick={() => onClickEmailAdress()} className="answer__button" type="button">OK</button>
            <Timer />
          </div>
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
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onSbmituPreTaxForm(e)} className={questionPreTaxAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <span className="preTaxSpan">$</span>
            <input value={preTax.toNumber} required onChange={(e) => setPreTax(e.target.value)} className="answer__input" type="number" placeholder="0"></input>
            <button className="answer__button" type="submit">OK</button>
            <Timer />
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
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div  className={questionCoBorrowerAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={coBorrower === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickCoBorrower(e)} id="Yes" type="button">YES</button>
              <button className={coBorrower === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickCoBorrower(e)} id="No" type="button">NO</button>
            </div>
            <Timer />
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
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onSubmitCoBorrowerTaxForm(e)} className={questionCoBorrowerTaxAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <span className="preTaxSpan">$</span>
            <input value={coBorrowerTax} required onChange={(e) => setCoBorrowerTax(e.target.value)} className="answer__input" type="number" placeholder="0"></input>
            <button className="answer__button" type="submit">OK</button>
            <Timer />
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
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionCardDebitAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={cardDebit === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickCardDebit(e)} id="Yes" type="button">YES</button>
              <button className={cardDebit === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickCardDebit(e)} id="No" type="button">NO</button>
            </div>
            <Timer />
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
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionUnsecuredDebitAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={cardUnsecuredDebit === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickUnsecuredDebit(e)} id="Yes" type="button">YES</button>
              <button className={cardUnsecuredDebit === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickUnsecuredDebit(e)} id="No" type="button">NO</button>
            </div>
            <Timer />
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
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionMonthlyPaymentAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={monthlyPayment === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickMonthlyPayment(e)} id="Yes" type="button">YES</button>
              <button className={monthlyPayment === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickMonthlyPayment(e)} id="No" type="button">NO</button>
            </div>
            <Timer />
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
            <Timer />
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
            <Timer />
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
            <Timer />
          </div>
        </div>

        <div className={questionAdress2 ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>What is your street address?</p>
            <Timer />
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
            <Timer />
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
            <Timer />
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
            <Timer />
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
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionHomeownerAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={homeownerAnswer === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickHomeowner(e)} id="Yes" type="button">YES</button>
              <button className={homeownerAnswer === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickHomeowner(e)} id="No" type="button">NO</button>
            </div>
            <Timer />
           </div>
        </div>
      </>
      }
      </div>




      <div ref={myRef16}>
      {onClickMilitaryCheck &&
      <>
        <div className={questionMilitary ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Are you currently in the Military?</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionMilitaryAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={militarryAnswer === "Yes" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={(e) => onClickMilitary(e)} id="Yes" type="button">YES</button>
              <button className={militarryAnswer === "No" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={(e) => onClickMilitary(e)} id="No" type="button">NO</button>
            </div>
            <Timer />
           </div>
        </div>
      </>
      }
      </div>




      <div className="coBorrowed"  ref={myRef17}>
      {onClickDriversLicenseCheck &&
      <>
        <div className={questionDriversLicense ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Driver's License / State ID #</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onSubmitDriversLicenseForm(e)} className={questionDriversLicenseAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <input value={driverLicenseAnswer} required onChange={(e) => setDriverLicenseAnswer(e.target.value)} className="answer__input" type="text" placeholder="Drivers License"></input>
            <select onChange={(e) => setDriverLicenseStateAnswer(e.target.value)} className="custom-select custom-select-lg mb-3">
              <option value="AK">AK</option>
              <option value="AL">AL</option>
              <option value="AR">AR</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select>
            <button className="answer__button" type="submit">OK</button>
            <Timer />
           </form>
        </div>

        <div className={questionDriversLicenseAnswer ? "coBorrowed-attention" : "coBorrowed-attention coBorrowed-attention-disable"}>
          <div>
            <img src="./img/ic_attention.png" alt="attention"></img>
          </div>
          <span>Your driver's license number is used to verify your identity and prevent fraud</span>
        </div>
      </>
      }
      </div>




      <div className="coBorrowed"  ref={myRef18}>
      {onClickDateOfBirthCheck &&
      <>
        <div className={questionDateOfBirth ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>What is Your Date of Birth?</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionDateOfBirthAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <input onChange={(e) => setDateOfBirth(e.target.value)} className="answer__input" type="date" max={currentDate} min="1900-01-01" defaultValue="2011-08-19" id="example-date-input"/>
            <button onClick={() => onClickDateOfBirth()} className="answer__button" type="button">OK</button>
            <Timer />
          </div>
        </div>

        <div className={questionDateOfBirthAnswer ? "coBorrowed-attention" : "coBorrowed-attention coBorrowed-attention-disable"}>
          <div>
            <img src="./img/ic_attention.png" alt="attention"></img>
          </div>
          <span>We ask for your birthday so lenders can protect and verify your identity. You must be over 18 years of age.</span>
        </div>
      </>
      }
      </div>




      <div className="coBorrowed" ref={myRef19}>
      {onClickIncomeTypeCheck &&
      <>
        <div className={questionIncomeType ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Income Type</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionIncomeTypeAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={incomeTypeAnswer === "Benefits" ? "timeMoney-block-active incomeType-button" : "timeMoney-block-button incomeType-button"} onClick={() => onClickIncomeTypeAnswerButton("Benefits")} id="Benefits" ><img src={incomeTypeAnswer === "Benefits" ? "./img/incominType2.png" : "./img/incominType22.png"} alt="incomin type"></img><span>Benefits</span></button>
              <button className={incomeTypeAnswer === "Employment" ? "timeMoney-block-active incomeType-button" : "timeMoney-block-button incomeType-button"}  onClick={() => onClickIncomeTypeAnswerButton("Employment")} id="Employment" ><img src={incomeTypeAnswer === "Employment" ? "./img/incominType1.png" : "./img/incominType11.png"} alt="incomin type"></img><span>Employment</span></button>
            </div>
            <Timer />
          </div>
        </div>
      </>
      }
      </div>


      <div className="coBorrowed" ref={myRef20}>
      {onClickPayoutTypeCheck &&
      <>
        <div className={questionPayoutType ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>{incomeTypeAnswer === "Benefits" ? "Type of Benefits" : "Payout Type"}</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionPayoutTypeAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
              {incomeTypeAnswer === "Employment" &&
              <>
              <div className="timeMoney-block">
                <button className={payOutTypeTypeOfBenefits === "Salary" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={() => onClickPayoutTypeButton("Salary")} type="button">Salary</button>
                <button className={payOutTypeTypeOfBenefits === "Hourly" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={() => onClickPayoutTypeButton("Hourly")} type="button">Hourly</button>
              </div>
              <Timer />
              </>
              }
              {incomeTypeAnswer === "Benefits" &&
              <>
                <div className="timeMoney-block">
                  <button className={payOutTypeTypeOfBenefits === "SSN" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={() => onClickPayoutTypeButton("SSN")} type="button">SSN</button>
                  <button className={payOutTypeTypeOfBenefits === "Disability" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={() => onClickPayoutTypeButton("Disability")} type="button">Disability</button>
                </div>
                <div className="timeMoney-block">
                  <button className={payOutTypeTypeOfBenefits === "Pension/Retirement" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={() => onClickPayoutTypeButton("Pension/Retirement")} type="button">Pension/<br></br>Retirement</button>
                  <button className={payOutTypeTypeOfBenefits === "Unemployment" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={() => onClickPayoutTypeButton("Unemployment")} type="button">Unemployment</button>
                </div>
                <Timer />
              </>
              }
          </div>
        </div>
      </>
      }
      </div>




      <div className="coBorrowed"  ref={myRef21}>
      {onClickMonthlyIncomeCheck &&
      <>
        <div className={questionMonthlyIncome ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Monthly Income</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionMonthlyIncomeAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={monthlyIncome === "Above$5000" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={() => onClickMonthlyIncomeButton("Above$5000")} type="button">Above<br></br>$5000</button>
              <button className={monthlyIncome === "$4001-$5000" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={() => onClickMonthlyIncomeButton("$4001-$5000")} type="button">$4001<br></br>-<br></br>$5000</button>
            </div>
            <div className="timeMoney-block">
              <button className={monthlyIncome === "$3001-$4000" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={() => onClickMonthlyIncomeButton("$3001-$4000")} type="button">$3001<br></br>-<br></br>$4000</button>
              <button className={monthlyIncome === "$2001-$3000" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={() => onClickMonthlyIncomeButton("$2001-$3000")} type="button">$2001<br></br>-<br></br>$3000</button>
            </div>
            <div className="timeMoney-block">
              <button className={monthlyIncome === "$1001-$2000" ? "timeMoney-block-active" : "timeMoney-block-button"} onClick={() => onClickMonthlyIncomeButton("$1001-$2000")} type="button">$1001<br></br>-<br></br>$2000</button>
              <button className={monthlyIncome === "Under$1000" ? "timeMoney-block-active" : "timeMoney-block-button"}  onClick={() => onClickMonthlyIncomeButton("Under$1000")} type="button">Under<br></br>$1000</button>
            </div>
            <Timer />
          </div>
        </div>


        <div className={questionMonthlyIncomeAnswer ? "coBorrowed-attention" : "coBorrowed-attention coBorrowed-attention-disable"}>
          <div>
            <img src="./img/ic_attention.png" alt="attention"></img>
          </div>
          <span>Enter your total income before taxes and include all sources of income.</span>
        </div>
      </>
      }
      </div>





      <div className="coBorrowed" ref={myRef22}>
      {onClickEmployerNameIncomeSourceCheck &&
      <>
        <div className={questionEmployerNameIncome ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Employer Name/Income Source</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionEmployerNameIncomeAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <input value={employerNameIncomeSourse} required onChange={(e) => setEmployerNameIncomeSourse(e.target.value)} className="answer__input" type="text" placeholder="Employer Name/Income Source"></input>
            <button onClick={() => onClickEmployerNameIncome()} className="answer__button" type="button">OK</button>
            <Timer />
          </div>
        </div>

        <div className={questionEmployerNameIncomeAnswer ? "coBorrowed-attention" : "coBorrowed-attention coBorrowed-attention-disable"}>
          <div>
            <img src="./img/ic_attention.png" alt="attention"></img>
          </div>
          <span>We will not contact your employer. Please enter your main source of income. Social Security, Disability and Unemployment income OK.</span>
        </div>
      </>
      }
      </div>




      <div className="coBorrowed" ref={myRef23}>
      {onClickEmployerPhoneCheck &&
      <>
        <div className={questionEmployerPhone ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Employer Phone</p>
            <Timer />
          </div>
        </div>


        <div className="mainSection__answer answer answer-amount">
        <form onSubmit={(e) => onSubmitEmployerPhoneForm(e)} className={questionEmployerPhoneAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
          <div className="adress__inputs">
            <input value={employerPhone} onChange={(e) => setEmployerPhone(e.target.value)} required className="answer__input adress__input-text" type="number" placeholder="Phone number"></input>
            <input value={employerPhoneExt} onChange={(e) => setEmployerPhoneExt(e.target.value)} required className="answer__input adress__input-num" type="number" placeholder="Ext."></input>
          </div>
          <button className="answer__button" type="submit">OK</button>
          <Timer />
        </form>
      </div>


        <div className={questionEmployerNameIncomeAnswer ? "coBorrowed-attention" : "coBorrowed-attention coBorrowed-attention-disable"}>
          <div>
            <img src="./img/ic_attention.png" alt="attention"></img>
          </div>
          <span>Improve your chances of approval with a valid work phone number. We will not contact your employer.</span>
        </div>
      </>
      }
      </div>




      <div className="coBorrowed" ref={myRef24}>
      {onClickJobTitleCheck &&
      <>
        <div className={questionJobTitle ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Job Title</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onSubmitJobTitleForm(e)} className={questionJobTitleAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <input value={jobTitle} required onChange={(e) => setJobTitle(e.target.value)} className="answer__input" type="text" placeholder="Job title"></input>
            <button className="answer__button" type="submit">OK</button>
            <Timer />
          </form>
        </div>

      </>
      }
      </div>




      <div ref={myRef25}>
      {onClickTimeEmployedCheck &&
      <>
        <div className={questionTimeEmployed ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Time Employed</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionTimeEmployedAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={timeEmployed === "5+Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"} onClick={(e) => onClickTimeEmployedButton("5+Years")} id="5+Years" type="button">5+<br></br> Years</button>
              <button className={timeEmployed === "3to5Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => onClickTimeEmployedButton("3to5Years")} id="3to5Years" type="button">3 to 5 <br></br> Years</button>
            </div>
            <div className="timeMoney-block">
              <button className={timeEmployed === "2to3Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => onClickTimeEmployedButton("2to3Years")} id="2to3Years" type="button">2 to 3 <br></br> Years</button>
              <button className={timeEmployed === "1to2Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => onClickTimeEmployedButton("1to2Years")} id="1to2Years" type="button">1 to 2 <br></br> Years</button>
            </div>
            <div className="timeMoney-block">
              <button className={timeEmployed === "7to12Months" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => onClickTimeEmployedButton("7to12Months")} id="7to12Months" type="button">7 to 12 <br></br> Months</button>
              <button className={timeEmployed === "1to6Months" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => onClickTimeEmployedButton("1to6Months")} id="1to6Months" type="button">1 to 6 <br></br> Months</button>
            </div>
            <Timer />
          </div>
        </div>
      </>
      }
      </div>




      <div className="coBorrowed" ref={myRef26}>
      {onClickPaycheckReceivedCheck &&
      <>
        <div className={questionPaycheckReceived ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>How is your Paycheck Received?</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionPaycheckReceivedAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={paycheckReceived === "ElectronicDeposit" ? "timeMoney-block-active incomeType-button" : "timeMoney-block-button incomeType-button"} onClick={() => onClickPaycheckReceivedButton("ElectronicDeposit")} id="ElectronicDeposit" ><img src={paycheckReceived === "ElectronicDeposit" ? "./img/Paycheck11.png" : "./img/Paycheck1.png"} alt="incomin type"></img><span>Electronic Deposit</span></button>
              <button className={paycheckReceived === "PaperCheck" ? "timeMoney-block-active incomeType-button" : "timeMoney-block-button incomeType-button"}  onClick={() => onClickPaycheckReceivedButton("PaperCheck")} id="PaperCheck" ><img src={paycheckReceived === "PaperCheck" ? "./img/Paycheck22.png" : "./img/Paycheck2.png"} alt="incomin type"></img><span>Paper Check</span></button>
            </div>
            <Timer />
          </div>
        </div>
      </>
      }
      </div>




      <div className="coBorrowed" ref={myRef27}>
      {onClickHowOftenAreYouPaidCheck &&
      <>
        <div className={questionHowOftenAreYouPaid ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>How Often Are You Paid?</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionHowOftenAreYouPaidAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={howOftenAreYouPaid === "Every2weeks" ? "timeMoney-block-active incomeType-button" : "timeMoney-block-button incomeType-button"} onClick={() => onClickHowOftenAreYouPaidButton("Every2weeks")} id="Every2weeks" ><img src={howOftenAreYouPaid === "Every2weeks" ? "./img/2weeks11.png" : "./img/2weeks1.png"} alt="Every 2 weeks"></img><span>Every 2 weeks</span></button>
              <button className={howOftenAreYouPaid === "TwiceAMonth" ? "timeMoney-block-active incomeType-button" : "timeMoney-block-button incomeType-button"}  onClick={() => onClickHowOftenAreYouPaidButton("TwiceAMonth")} id="TwiceAMonth" ><img src={howOftenAreYouPaid === "TwiceAMonth" ? "./img/months11.png" : "./img/months1.png"} alt="TwiceAMonth"></img><span>Twice a Month</span></button>
            </div>
            <div className="timeMoney-block">
              <button className={howOftenAreYouPaid === "Monthly" ? "timeMoney-block-active incomeType-button" : "timeMoney-block-button incomeType-button"} onClick={() => onClickHowOftenAreYouPaidButton("Monthly")} id="Monthly" ><img src={howOftenAreYouPaid === "Monthly" ? "./img/twiceamonths11.png" : "./img/twiceamonths1.png"} alt="Monthly"></img><span>Monthly</span></button>
              <button className={howOftenAreYouPaid === "Weekly" ? "timeMoney-block-active incomeType-button" : "timeMoney-block-button incomeType-button"}  onClick={() => onClickHowOftenAreYouPaidButton("Weekly")} id="Weekly" ><img src={howOftenAreYouPaid === "Weekly" ? "./img/weekly11.png" : "./img/weekly1.png"} alt="Weekly"></img><span>Weekly</span></button>
            </div>
            <Timer />
          </div>
        </div>

      </>
      }
      </div>




      <div className="coBorrowed"  ref={myRef28}>
      {onClickNextPaydateCheck &&
      <>
        <div className={questionNextPaydate ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Next Paydate</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionNextPaydateAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <input onChange={(e) => setNextPaydate(e.target.value)} className="answer__input" type="date" min={currentDate} min="2030-01-01" defaultValue={currentDate} id="example-date-input"/>
            <button onClick={() => onClickNextPaydateButton()} className="answer__button" type="button">OK</button>
            <Timer />
          </div>
        </div>

      </>
      }
      </div>





      <div className="coBorrowed"  ref={myRef29}>
      {onClickDepositDetailsCheck &&
      <>
        <div className={questionDepositDetails ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Deposit Details</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onSubmitDepositDetailsForm(e)} className={questionDepositDetailsAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <input value={abaRouting} required onChange={(e) => setAbaRouting(e.target.value)} className="answer__input" type="text" placeholder="ABA/Routing"></input>
            <span>Your data is secured using industry standard for the site information security. Your ABA/Routing number can be found on most bank statements as well as on the bottom of your checks.</span>
            <img src="./img/img_example_routing.png" alt="img_example_routing"></img>
            <input value={accountNumber} required onChange={(e) => setAccountNumber(e.target.value)} className="answer__input" type="text" placeholder="ABA/Routing"></input>
            <img src="./img/img_example_account.png" alt="img_example_routing"></img>
            <button className="answer__button" type="submit">OK</button>
            <Timer />
          </form>
        </div>

        <div className={questionDepositDetailsAnswer ? "coBorrowed-attention" : "coBorrowed-attention coBorrowed-attention-disable"}>
          <div>
            <img src="./img/ic_attention.png" alt="attention"></img>
          </div>
          <span>This information is needed so a lender can direct deposit your loan when approved.</span>
        </div>

        <div className={questionDepositDetailsAnswer ? "coBorrowed-attention mrtAlert" : "coBorrowed-attention coBorrowed-attention-disable"}>
          <div>
            <img src="./img/ic_attention.png" alt="attention"></img>
          </div>
          <span>Your Checking Account number can be found on most bank statements as well as on the bottom of your checks.</span>
        </div>

      </>
      }
      </div>



      <div className="coBorrowed" ref={myRef30}>
      {onClickTypeOfBankAccountCheck &&
      <>
        <div className={questionTypeOfBankAccount ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Type of Bank Account</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionTypeOfBankAccountAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={typeOfBankAccount === "Checking" ? "timeMoney-block-active incomeType-button" : "timeMoney-block-button incomeType-button"} onClick={() => onClickTypeOfBankAccountButton("Checking")} id="Checking" ><img src={typeOfBankAccount === "Checking" ? "./img/cheking1.png" : "./img/cheking11.png"} alt="Checking"></img><span>Checking</span></button>
              <button className={typeOfBankAccount === "Savings" ? "timeMoney-block-active incomeType-button" : "timeMoney-block-button incomeType-button"}  onClick={() => onClickTypeOfBankAccountButton("Savings")} id="Savings" ><img src={typeOfBankAccount === "Savings" ? "./img/Savings11.png" : "./img/Savings1.png"} alt="Savings"></img><span>Savings</span></button>
            </div>
            <Timer />
          </div>
        </div>

      </>
      }
      </div>


      <div ref={myRef31}>
      {onClickTimeWithBankAccountCheck &&
      <>
        <div className={questionTimeWithBankAccount ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Time with Bank Account</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <div className={questionTimeWithBankAccount ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <div className="timeMoney-block">
              <button className={timeWithBankAccount === "5+Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"} onClick={(e) => setTimeWithBankAccountButton(e)} id="5+Years" type="button">5+<br></br> Years</button>
              <button className={timeWithBankAccount === "3to5Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeWithBankAccountButton(e)} id="3to5Years" type="button">3 to 5 <br></br> Years</button>
            </div>
            <div className="timeMoney-block">
              <button className={timeWithBankAccount === "2to3Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeWithBankAccountButton(e)} id="2to3Years" type="button">2 to 3 <br></br> Years</button>
              <button className={timeWithBankAccount === "1to2Years" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeWithBankAccountButton(e)} id="1to2Years" type="button">1 to 2 <br></br> Years</button>
            </div>
            <div className="timeMoney-block">
              <button className={timeWithBankAccount === "7to12Months" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeWithBankAccountButton(e)} id="7to12Months" type="button">7 to 12 <br></br> Months</button>
              <button className={timeWithBankAccount === "1to6Months" ? "timeMoney-block-active" : "timeMoney-block-button timeMoney-block-active"}  onClick={(e) => setTimeWithBankAccountButton(e)} id="1to6Months" type="button">1 to 6 <br></br> Months</button>
            </div>
            <Timer />
          </div>
        </div>
      </>
      }
      </div>




      <div className="coBorrowed" ref={myRef32}>
      {onClickSocialSecurityNumberCheck &&
      <>
        <div className={questionSocialSecurityNumber ? "chat__question" : "chat__question chat__question-disable"}>
          <div className="chat__question-ploto-block">
            <img className="chat__question-photo" src="./img/img_photo.png" alt="manager photo"></img>
          </div>
          <div className="chat__question-text">
            <p>Social Security Number</p>
            <Timer />
          </div>
        </div>

        <div className="mainSection__answer answer answer-amount">
          <form onSubmit={(e) => onSubmitSocialSecurityNumberForm(e)} className={questionSocialSecurityNumberAnswer ? "answer__inner" : "answer__inner answer__inner-disable" }>
            <input value={socialSecurityNumber} onChange={(e) => setSocialSecurityNumber(e.target.value)} required className="answer__input" type="number" placeholder="XXX-XX-XXXX"></input>
            <span>By clicking "Get Cash", I affirm that I have read, understand, and agree to the Disclaimer, Privacy Policy and Terms of Use, my click is my electronic signature, and I authorize you to share my information with lenders and other partners in order to receive a loan and accept that getfundsasap.com might use SMS/MMS messaging, autodialers or prerecorded messages to call or text me on 456-789-4534. I understand consent is not required to obtain a loan. I further understand that my consent to be contacted is not a condition to getting the services offered and that I have no obligation to accept a loan once I am connected with an available lender.</span>
            <button className="answer__button get-cash" type="submit">Get Cash</button>
            <Timer />
          </form>
        </div>

        <div className={questionSocialSecurityNumberAnswer ? "coBorrowed-attention" : "coBorrowed-attention coBorrowed-attention-disable"}>
          <div>
            <img src="./img/ic_attention.png" alt="attention"></img>
          </div>
          <span>Many lenders need your Social Security Number to approve your loan. This site is secured by Comodo. An industry standard for site and information security.</span>
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
