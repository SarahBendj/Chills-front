import React from 'react';
import Services from './index';
import Form from './Form';

const DetailService = ({ services, extra ,technic, discount}) => {
  return (
    <div className='detail-page'>
      <div className='detail-page-service'>
       
      
      </div>
  
      <div className='detail-page-form'> </div>
      < Form  extra={ extra } technic={technic} discount={discount}/>
    </div>
    
  );
};

export default DetailService;
