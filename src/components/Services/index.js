import Service from "./Service";
import Props from 'prop-types'
import './style.scss';

const Services = ({ services }) => {
  
  return (
    <div className="services">
      <ul className="services-list">
        {
          services.map((service)=> <li className='services-box' key={ service.id }> < Service {...service} /> </li>)
        }
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
