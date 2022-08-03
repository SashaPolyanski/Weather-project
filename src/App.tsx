import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/components/Home';
import { MonthStatistic } from './pages/monthStatistics/MonthStatistic';
import { Header } from './pages/shared/Header';

const App = () => (
  <div className="globalContainer">
    {/* <Popup /> */}
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="month-statistic" element={<MonthStatistic />} />
      </Routes>
    </div>
  </div>
);

export default App;
