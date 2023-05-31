import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const index = () => {
  return (
    <div className='lost-page'>
      <p className='lost-page-text'> 404 !</p>
      <Link  to='/main' className='lost-page-link'> Get back to the main</Link>
     
      
    </div>
  );
};

export default index;
