import React from 'react';
import RandomImage from './randomImage/RandomImage'

import './App.css';

function App() {
  return (
    <div className="App" >
      <RandomImage interval={5000}/>
    </div>
  );
}

export default App;
