import React from 'react';
import './App.css';
// comps
import SimpleClock from './components/SimpleClock'
import StateTest from './components/StateTest'

function App(props) {
  return (
    <div>
      <SimpleClock />
      <StateTest />
    </div>
  );
}

export default App;
