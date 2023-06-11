import React from 'react';
import './style.scss';
import Product1 from './image/1.jpg';
import Product2 from './image/2.jpg';
import Product3 from './image/3.jpg';
import Product4 from './image/4.jpg';
import Product5 from './image/5.jpg';
import Product6 from './image/6.jpg';
import Product8 from './image/8.jpg';
import Product9 from './image/9.jpg';

const Products = () => {
  return (
    <>
    <div>
       <p className='product-container-title'> Meet NATURE, Use our PRODUCTS </p>
    </div>
    <div className='product-container'>
     
      <div className='product-list'>
        {/* product */}
        <div className='product'>
          <div className='product-name'>OIL</div>
          <img className='product-image'  src={Product1} alt="" />
          <div className='product-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           
           </div>
        </div>
         
         {/* product */}
         <div className='product'>
          <div className='product-name'> VITAMINES</div>
          <img className='product-image'  src={Product9} alt="" />
          <div className='product-description'> aspernatur harum maxime illo numquam molestiae tenetur perspiciatis? </div>
        </div>
         {/* product */}
         <div className='product'>
          <div className='product-name'>COSMETICS</div>
          <img className='product-image'  src={Product6} alt="" />
          <div className='product-description'>Consequatur rerum commodi magnam.</div>
        </div>
        <div className='product'>
          <div className='product-name'>OIL</div>
          <img className='product-image'  src={Product5} alt="" />
          <div className='product-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.

             </div>
        </div>
          {/* product */}
          <div className='product'>
          <div className='product-name'>SOAP</div>
          <img className='product-image'  src={Product1} alt="" />
          <div className='product-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           
           </div>
        </div>
         
         {/* product */}
         <div className='product'>
          <div className='product-name'> VITAMINES</div>
          <img className='product-image'  src={Product9} alt="" />
          <div className='product-description'> aspernatur harum maxime illo numquam molestiae tenetur perspiciatis? </div>
        </div>
         {/* product */}
         <div className='product'>
          <div className='product-name'>COSMETICS</div>
          <img className='product-image'  src={Product6} alt="" />
          <div className='product-description'>Consequatur rerum commodi magnam.</div>
        </div>
        <div className='product'>
          <div className='product-name'>OIL</div>
          <img className='product-image'  src={Product5} alt="" />
          <div className='product-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           
           
           </div>
        </div>
         
      
      </div>
      
    </div>
    </>
  );
};

export default Products;
