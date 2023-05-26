import React from 'react';
import Props from 'prop-types';
import './style.scss';

const Service = ({ name, description, img, price }) => {
  return (
    <div className='box'>
      <h2 className='box-title'> { name } </h2>
      <img  className='box-image'src={img} alt={`image of ${img}`} />
      {/* <p className='box-description'> { description } </p> */}
      <span className='box-price'> <p> { price }</p>  $</span>
    </div>
  );
};

Service.props = {
  name: Props.string.isRequired,
  description:Props.string.isRequired,
  price: Props.number.isRequired,
  img: Props.string.isRequired
}
export default Service;
