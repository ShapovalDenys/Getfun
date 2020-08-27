import React from 'react';

import './App.scss';
import Header from './Components/Header/Header';
import Assistant from './Components/Assistant/Assistant';
import MainSection from './Components/MainSection/MainSection';

const App = () => (
  <div className="App">
    <Header />
    <Assistant />
    <MainSection />
  </div>
);

export default App;
