import Service from "./Service";
import Props from 'prop-types'
import './style.scss';
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = ({ services }) => {
  
    const [selectedService, setSelectedService] = useState(services[0]); // Initialize selectedService with the first item
  
    const handleServiceClick = (service) => {
      setSelectedService(service);
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
              <Link to={`/Appointement/${service.name}`}>
                <Service {...service} />
              </Link>
            </li>
          ))}
        </ul>
        </div>
  );
};


Services.props = ({
  Service: Props.arrayOf(Props.shape({
    id: Props.number.isRequired
  })).isRequired
})

export default Services;
