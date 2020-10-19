import React, { useState } from 'react';
import './Css/App.css';

import {StartPage, AlgorithmPage} from './Pages'

const App : React.FC = () => {

  const [start, setStart] = useState(false);

  const startAlgorithm = () => {
      setStart(true);
  }

  return (
    <div className="App">
      {!start && <StartPage startAlgorithm={startAlgorithm} /> } 
      {start &&
        <AlgorithmPage />
      }
    </div>
  );
}

export default App;
