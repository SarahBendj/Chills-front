import { Link } from 'react-router-dom';
import Props from 'prop-types';
import Button from '../UI/Input/Button'
import "./style.scss";


const Service = ({img, description, price, name , isOne}) => {
  

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
          <span className={isOne? "one-box-price" : "box-price"}> <p> { price }</p>  $</span>
          <p className={isOne ? "one-box-description" :"hidden" }> For this , here's the technics </p>
          
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
