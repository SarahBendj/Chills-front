import Service from "./Service";
import Props from "prop-types";
import "./style.scss";
import { useState , useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "../../Axios/axios";

//style service

const Services = ({ services , isOne={isOne}, setIsOne }) => {
  // const [isOne, setIsOne] = useState(false);
  const [selectedService, setSelectedService] = useState([]);
  const { specificService } = useParams();

  const handleServiceClick = async (service) => {
    setIsOne(true);
    try {
      const response = await axios.get(`services/${service.id}`, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      setSelectedService(response.data);
    } catch (error) {
      console.error(error);
    }
  };


 
  return (
    <div className="services">
      <ul className="services-list">
        {services.map((service) => (
          <li
            className="services-box"
            key={service.id}
            onClick={() => handleServiceClick(service)}
          >
            <Link  to={`/services/${service.name}`}>
              <Service {...service}/>
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
