import React from 'react';
import Roby from'./Roby.jpeg';
import Andrey from './Andrey.jpeg';
import Collins from './Collins.jpeg';
import './style.scss';

const index = () => {
  return (
    <div  className='Testemony'>
      <p> Testimonials  </p>
    <div className='boxes'>
      {/* first person */}
      <div className="box">
        <img  className="profile-picture" src={Roby} alt="" />
        <div className='profile-name'> Roby pitterson</div>
        <div className='profile-testemony'> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatum ullam eum, corrupti accusamus sit nostrum vel sunt,
         ipsum, ratione quos harum atque illum perspiciatis adipisci.
          Dolores atque illum quaerat assumenda?</div>
      </div>
      {/* another person */}
      <div className="box">
        <img  className="profile-picture" src={Andrey} alt="" />
        <div className='profile-name'>Andrey Ruggi</div>
        <div className='profile-testemony'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatum ullam eum, corrupti accusamus sit nostrum vel sunt,
         ipsum, ratione quos harum atque illum perspiciatis adipisci.
          Dolores atque illum quaerat assumenda?</div>
      </div>
      {/* another person */}
      <div className="box">
        <img  className="profile-picture" src={Collins} alt="" />
        <div className='profile-name'> Collins Dupuis</div>
        <div className='profile-testemony'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatum ullam eum, corrupti accusamus sit nostrum vel sunt,
         ipsum, ratione quos harum atque illum perspiciatis adipisci.
          Dolores atque illum quaerat assumenda?</div>
      </div>
      <div className="box">
        <img  className="profile-picture" src={Andrey} alt="" />
        <div className='profile-name'>Andrey Ruggi</div>
        <div className='profile-testemony'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatum ullam eum, corrupti accusamus sit nostrum vel sunt,
         ipsum, ratione quos harum atque illum perspiciatis adipisci.
          Dolores atque illum quaerat assumenda?</div>
      </div>
      {/* another person */}
      <div className="box">
        <img  className="profile-picture" src={Collins} alt="" />
        <div className='profile-name'> Collins Dupuis</div>
        <div className='profile-testemony'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatum ullam eum, corrupti accusamus sit nostrum vel sunt,
         ipsum, ratione quos harum atque illum perspiciatis adipisci.
          Dolores atque illum quaerat assumenda?</div>
      </div>
    </div>
    </div>
  );
};

export default index;
