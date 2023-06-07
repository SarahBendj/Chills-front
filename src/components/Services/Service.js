import { Link , useNavigate } from 'react-router-dom';
import Props from 'prop-types';
import Button from '../UI/Input/Button'
import "./style.scss";


const Service = ({img, description, price, name , isOne , technic ,  bodyZone, selectedService }) => {

  
  const navigate = useNavigate();
  console.log(selectedService)



  const moveToAppointmentPage = (e) => {
    e.preventDefault;
  
  }
  

  return (
    <>
    <div className= {isOne ? " one-box" : "box"} >
      <div >
         <img  className={isOne? "one-box-image" : "box-image"}src={img} alt={`image of ${img}`} />
      </div>
      <div >
          <h2 className={isOne? "one-box-title" : "box-title"}>  { name } </h2>
          <p className={isOne ? "one-box-description" :"hidden" }> { description } </p>
          <div className={isOne ? "one-box-technics" :"hidden" }>
          <p> & For peaceful moment we suggest differnet technics  </p>
          {
            technic.map((item)=> (
              <li key={item.id}> {item.name}</li>
            ))
          }
          
          </div>
          <p className={isOne? "one-box-price" : "hidden"} >price would be:  <span >   { price }  $</span> </p>
          
         <Link to='/Appointement'>
           <Button onClick={moveToAppointmentPage} display={isOne? 'btn' :'hidden'}> Book an appointement</Button>
           </Link> 
      </div>
     
    </div>
    </>
  );
};

Service.props = {
  name: Props.string.isRequired,
  description:Props.string.isRequired,
  price: Props.number.isRequired,
  img: Props.string.isRequired,
  isOne: Props.bool.isRequired,
  
}
export default Service;
