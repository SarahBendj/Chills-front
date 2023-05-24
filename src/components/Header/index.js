import { Link, NavLink } from 'react-router-dom';
import './style.scss'

const Header = () => {

  return (
    <header>
      <nav >
        <div className='navLeft'>
        <NavLink className='nav-item'>Services </NavLink>
        <NavLink className='nav-item'>Main</NavLink>
        </div>
        <div className='navRight'>
        <NavLink className='nav-item'>Login</NavLink>
        <NavLink className='nav-item'>Sign in</NavLink>
        </div>
      </nav>
    </header>
  )

};



export default Header;
