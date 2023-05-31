import React from 'react';
import logo from './Chills.svg';
import './style.scss';

const index = () => {
  return (
    <div>
      <div className='logo'>
        <img className='logo-img' src={logo} alt="brand logo"  />
      </div>
      <div className='brand'> Chills Center</div>
      
    </div>
  );
};

export default index;
