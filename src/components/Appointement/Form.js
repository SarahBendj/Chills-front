import { useState , useEffect } from 'react';
import InputTextArea from '../UI/Input/InputTextArea';
import Button from '../UI/Input/Button';
import Input from '../UI/Input/Input';
import SelectOption from '../UI/Input/SelectOption';
import axios from '../../Axios/axios';
import './style.scss'
import { Notyf } from 'notyf';
import { Link } from 'react-router-dom';


const notyf = new Notyf({
  duration :2000,
  position:{
    x:'right',
    y: 'top',
    
  },
  dismissible : true
});


//*End Point
const APPOINTEMENT_URL = "appointements";

const Form = ({ extra , discount,technic  ,  bodyZone , services }) => {
  //* data
  const [ infoBooked , setInfoBooked ] = useState({});
  const [ extraId , setExtraId ] = useState("");
  const [ discounted, setDiscounted]= useState("")
  const [ selectedExtra , setSelectedExtra ] = useState("");
  const [ description ,setDescription ] = useState("");
  const [ technicId, setTechnicId] = useState("");
  const [ selectedTechnic, setSelectedTechnic] = useState("");
  const [ selectedService , setSelectedService ] = useState("")
  const [ serviceId ,setServiceId ] = useState("");
  const [ bodyZoneId , setBodyZoneId] = useState("");
  const [ selectedBodyZone , setSelectedBodyZone] = useState("");

  //*conditions
  const [ isHovered ,setIsHovered ] = useState(false);
  const [ isBooked  , setIsBooked ] = useState(false)

  //*CLIENT DATA , DATA TO DISPLAY FOR THE CLIENT ONCE THE BOOKING IS DONE
  const clientDATA = ({
    TECHNIC : selectedService,
    EXTRA : selectedBodyZone,
    SERVICE : selectedService,
    DATE : infoBooked.createdat,
    DESCRIPTION : description
  })
  
  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const BOOKING = 
    {
      discount_sale: discounted,
      description: description,
      body_zone_id: bodyZoneId,
      services_id: serviceId,
      extra_id: extraId,
      technic_id: technicId,
      app_user_id : 1

  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        APPOINTEMENT_URL , BOOKING,
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        console.log(response.data)
        const data = response.data
        setInfoBooked(data)
        notyf.success('Appointment booked successfully');
        setIsBooked(true)
      })
      .catch((err) => {
        console.error(err);
        notyf.error('An error occurred. Please try to book again.');
      });
  };
 

 
//* select options handle
  const handleSelectedExtra = (value) => {
    setSelectedExtra(value);
    const match = extra.find((item) => item.name === value);
    setExtraId(parseInt(match.id,10));
  };
  //------
  const handleSelectedBodyZone = (value) => {
    setSelectedBodyZone(value);
    const match = bodyZone.find((item) => item.name === value);
    setBodyZoneId(parseInt(match.id,10));
  };
  //------
  const handleSelectedTechnic = (value) => {
    setSelectedTechnic(value);
    const match = technic.find((item) => item.name === value);
    setTechnicId(parseInt(match.id,10));
  };
  const handleSelectedService = (value) => {
    setSelectedService(value);
    const match = services.find((item) => item.name === value);
    setServiceId(parseInt(match.id,10));
  };


  return (
    <>
    <div className={isBooked ? 'hidden':''}>
     
     <form  onSubmit={handleOnSubmit} className="form">

      <p className='form-title '>  Appointement </p>

      <div className={ isHovered? 'visuel-effect' : '' } 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
      <img  className='box-img' src='' alt={`image of $''`} />
      <p className='box-title'> </p> </div>

      <SelectOption label="Services" onChange={(value)=> handleSelectedService(value) } value={selectedService} options={services} name='service_id' />
        < Input
        type='text' className='visuel-effect' name='text'
       placeholder='Dan14...' 
       label='Discount Code'
       onChange={ (value)=> setDiscounted(value)} 
       value={discounted}  
       validation={ {
              isRequired:false,
              type: 'string',
              minLenght:3,
        }}/>
        
        <SelectOption label="Extra services" onChange={(value)=> handleSelectedExtra(value) } value={selectedExtra} options={extra} name='extra_id' />
        <SelectOption label="bodyzONE bo"onChange={(value)=> handleSelectedBodyZone(value) } value={selectedBodyZone}  options={bodyZone} name='bodyZone_id' />
        <SelectOption label="technics services"onChange={(value)=>  handleSelectedTechnic(value) } value={selectedTechnic}  options={technic} name='technic_id' />
        
        <InputTextArea 
         className='visuel-effect'
         name='description'
         label= 'Any request'
         placeholder='Please,feel free to mention any suggestion'
         value={description}
         onChange={ (value)=> setDescription(value)}
         validation={ {
               isRequired:true,
               type: 'string',
               minLenght:5,
         }}
          />
          < Button type="submit" value='book' > Book </Button>
      </form>
     
    </div>

    <div className={isBooked ?'form ' : 'hidden'}> 
      <p> Thank you ##NAME, your Appointement has been successfully booked <br /> You'll find your informations below
       </p>
       <div className='book-data'> 
       {Object.entries(clientDATA).map(([key, value]) => (
        <p 
          key={key}>
          {key}: <span className='data-value'> {value}</span>   
        </p>
       ))}
       </div>
       <Link className={isBooked ?'Link': 'hidden'}  to='/' > Back to the main</Link>
        </div>
       
    </>
    
  );
};

export default Form;
