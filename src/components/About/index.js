import React from 'react';
import './style.scss';
import AboutPageIMage from './About.jpg';
const About = () => {

  return (
  <>
    <h1 className='title'> Relax center  </h1>

    <div className='about'> 
      <div>
        <h2 className='about-title'> Escapism </h2>
        <p className='about-details'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Dolor voluptates sit aut, itaque consequuntur quas fugit? 
         Expedita delectus nam molestias, illo est ea, magnam laudantium
         excepturi sed qui in facilis!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minima dicta explicabo, eum possimus 
         voluptate quo voluptatem laboriosam aspernatur placeat modi quod illum quisquam facere odit omnis fuga, quibusdam ab.
         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Dolor voluptates sit aut, itaque consequuntur quas fugit? 
         Expedita delectus nam molestias, illo est ea, magnam laudantium
         excepturi sed qui in facilis!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minima dicta explicabo, eum possimus 
         voluptate quo voluptatem laboriosam aspernatur placeat modi quod illum quisquam facere odit omnis fuga, quibusdam ab.
         </p></div>
      <img className='about-image'  src={AboutPageIMage} alt="" />

    </div>
    </>
  );
};

export default About;
