import React from 'react';
import Service from './Service';
import Form from './Form';

const DetailService = ({extra ,technic, discount}) => {
  return (
    <div className='detail-page'>
      <div className='detail-page-service'></div>
       <p>truc truc truc plein de trucs </p>
      <div className='detail-page-form'> </div>
      < Form  extra={ extra } technic={technic} discount={discount}/>
    </div>
    
  );
};

export default DetailService;
