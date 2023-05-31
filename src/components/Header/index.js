import { Link, NavLink } from 'react-router-dom';
import './style.scss'

const Header = ({menu}) => {

  return (
    <header>
      <nav >
        <div className='navLeft'>
          {
            menu.map((item)=> <NavLink to={item.name} key={item.id} className='nav-item'>{item.name}</NavLink>)
          }
        
        
        </div>
        <div className='navRight'>
        
        </div>
      </nav>
    </header>
  )

};



export default Header;
