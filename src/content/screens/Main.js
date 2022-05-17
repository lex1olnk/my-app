import React from 'react';
import Header from './header';
import MainInner from './MainInner';
import FaqPage from './FaqPage';

const Main = () => {
  return (
    <div style={{ background: '#09304A' }}>
      <Header />
      <MainInner />
      <FaqPage />
    </div>
  );
}

export default Main;
