import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Header from './Components/Header/Header';
import Assistant from './Components/Assistant/Assistant';
import MainSection from './Components/MainSection/MainSection';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import RatesFees from './Components/RatesFees/RatesFees';
import LendingPolicy from './Components/LendingPolicy/LendingPolicy';
import ReturningCustomer from './Components/ReturningCustomer/ReturningCustomer';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/chat" exact render={() => <><Assistant/><MainSection/></>}/>
      <Route path="/how-it-works" exact component={HowItWorks} />
      <Route path="/rates-fees" exact component={RatesFees} />
      <Route path="/lending-policy" exact component={LendingPolicy} />
      <Route path="/returning-customer" exact component={ReturningCustomer} />
      <Redirect to="/home"/>
    </Switch>
    <Footer />
  </div>
);

export default App;
