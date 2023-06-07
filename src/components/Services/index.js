import Service from "./Service";
import Props from "prop-types";
import "./style.scss";
import { useState , useEffect } from "react";
import { useParams , useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import SearchBar from "../Header/SearchBar";
import axios from "../../Axios/axios";



const Services = ({ services ,technic }) => {
  
  const [selectedService, setSelectedService ] = useState([]);
  const { specificService } = useParams();
  
  const navigate = useNavigate();

  const handleServiceClick = async (service) => {

    try {
      const response = await axios.get(`services/${service.id}`, {
        headers: { "Content-Type": "application/json" },
      });
      setSelectedService(response.data);
     
    } catch (error) {
      console.error(error);
    }
  }
 

  useEffect(() => {
  
      if ( specificService ){
        const service = services.find((service)=>  service.name === specificService) 
        if (service) {
         handleServiceClick(service)
        }}
   

  }, [specificService]);
  

 
  return (
    <div className="services">
       < SearchBar  services={services}/>
      <ul className="services-list">
        {services.map((service) => (
          <li
            className="services-box"
            key={service.id}
            onClick={() => handleServiceClick(service)}
          >
            <Link  to={`/services/${service.name}`}  >
              <Service   {...service} technic={technic} selectedService={selectedService}/> 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Services.props = {
  Service: Props.arrayOf(
    Props.shape({
      id: Props.number.isRequired,
    })
  ).isRequired,
};

export default Services;
