import React from 'react';

import './App.css';
import BMI from './components/BMI';

const App = () => {
  return (
    <div className="App container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-lg-offset-3">
          <BMI />
        </div>
      </div>
    </div>
  );
}

export default App;
