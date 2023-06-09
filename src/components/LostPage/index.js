import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const index = () => {
  return (
    <div className='lost-page'>
      <p className='lost-page-text'> 404 !</p>
      <Link  to='/main' className='lost-page-link'> Get back to the main</Link>
     
      <div class="cube-space">
            <div class="cube">
                <div class="face top">404</div>
                <div class="face back">404</div>
                <div class="face left">404</div>
                <div class="face right"> 404</div>
                <div class="face front">404</div>
                <div class="face bottom"> 404</div>
            </div>
        </div>
    </div>
  );
};

export default index;
