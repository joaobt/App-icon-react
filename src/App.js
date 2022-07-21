import React, { useState } from 'react';
import Switch from './components/Switch';

const initialState = {
  fat: false,
  bald: false,
  poor: false
}


const App = () => {

  const [switches, setSwitches] = useState(initialState);

  const toggleSwitch = id => {
    const currentState = switches[id];
    if (currentState === undefined) return;

    const activeSwitches = Object.values(switches).filter(value => value).length;

    const newState = (activeSwitches === 2 ? initialState : switches);

    setSwitches({ ...newState, [id]: !currentState });

  };
return (
  <div className="container">
    <h1> Gordo, careca, pobre</h1>
    <Switch onClick={toggleSwitch} id='fat' active={switches['fat']} label="Gordo" />
    <Switch onClick={toggleSwitch} id='bald' active={switches['bald']} label="careca" />
    <Switch onClick={toggleSwitch} id='poor' active={switches['poor']} label="pobre" />
  </div>
)
};
export default App;




/*
if (activeSwitches === 2) {
  setSwitches({...initialState, [id]: !currentState});

 } else {
 console.log('currentState', id, currentState);

setSwitches({ ...switches, [id]: !currentState });

*/










  













