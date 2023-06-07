import Form from './Form';
import { useLocation } from 'react-router-dom';
import axios from '../../Axios/axios'
import './style.scss';
import { useEffect, useState } from 'react';


const Appointement = ({ extra ,technic, discount , services,bodyZone }) => {



  const location = useLocation();
  const specificService=location.state?.specificService;
 
  
 

  return (
    <div className='detail-page'>
      <div className='detail-page-service'>
      
      {specificService && <p>Service: {specificService.name}</p>}
       {/* <Service name={name} description={description} img={img} price={price} /> */}
      </div>
  
      <div className='detail-page-form'>  </div>
      < Form  extra={ extra } technic={technic} discount={discount}  bodyZone={  bodyZone }  services={services}/>
    </div>
    
  );
};

export default Appointement;
