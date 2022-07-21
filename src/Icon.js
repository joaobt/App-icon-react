import React from 'react';

const Icon = ({ id }) => {
  switch (id) {
    case 'switch':
      return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 43" id="Layer_43">
        <path className='out' d="M22.19,8.19H9.81a7.81,7.81,0,0,0,0,15.63H22.19a7.81,7.81,0,1,0,0-15.62Zm0,13.63H9.81a5.81,5.81,0,0,1,0-11.62H22.19a5.81,5.81,0,1,1,0,11.63Z"/>
        <path className='ineer' d="M21,10.58A5.42,5.42,0,1,0,26.42,16,5.42,5.42,0,0,0,21,10.58Zm0,8.83A3.42,3.42,0,1,1,24.42,16,3.42,3.42,0,0,1,21,19.42Z"/></g>
        </svg>
      );
    default:
      return null;
  }


}
export default Icon;