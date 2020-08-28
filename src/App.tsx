import React from 'react';

import './App.scss';
import Header from './Components/Header/Header';
import Assistant from './Components/Assistant/Assistant';
import MainSection from './Components/MainSection/MainSection';
import Footer from './Components/Footer/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Assistant />
    <MainSection />
    <Footer />
  </div>
);

export default App;
