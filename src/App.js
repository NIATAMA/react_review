import React from 'react';
import './App.css';
// comps
// import SimpleClock from './components/SimpleClock'
// import StateTest from './components/StateTest'
// import ConditionRender from './components/ConditionRender'
// import Lists from './components/Lists'
// import LiftingStateUp from './components/LiftingStateUp'
import Game from './components/tic_tac_toe/Game'

function App(props) {
  // <SimpleClock />
  // <StateTest />
  // <ConditionRender />
  // <Lists />
  // <LiftingStateUp />
  return (
    <div>
      <Game />
    </div>
  );
}

export default App;
