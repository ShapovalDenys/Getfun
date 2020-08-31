import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Header from './Components/Header/Header';
import Assistant from './Components/Assistant/Assistant';
import MainSection from './Components/MainSection/MainSection';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/chat" exact render={() => <><Assistant/><MainSection/></>}/>
      <Redirect to="/home"/>
    </Switch>
    <Footer />
  </div>
);

export default App;
