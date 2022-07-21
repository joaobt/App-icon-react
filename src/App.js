import React, { useState }from 'react';
import Icon from './Icon';


const App = () => {

  const [isOn,setIsOn] = useState(true);

  const toggle = () => {
    setIsOn(!isOn);
  }

  return (
    <div className="container">
      <h1> Gordo, careca, pobre</h1>
      
      <div onClick={() => {toggle()}} className={`item ${isOn ? 'on' : 'off'}`}>
        <label>Gordo</label> <Icon id="switch" />
      </div>
    </div>
  );
};
export default App;



