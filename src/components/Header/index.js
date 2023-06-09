import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import Profile from '../Profile';
import './style.scss';

const Header = ({menu}) => {

  const { auth , logout } = useAuth();
  
  const handleOnclick = () => {
    logout();
  };
  

  return (
    <header>
     
       <nav >
      <div className='navLeft'>
        {menu.slice(0, 3).map((item) => (
          <NavLink to={item.name} key={item.id} className='nav-item'>{item.name}</NavLink>
        ))}
      </div>
      <div className='navRight'>
        {auth?.token ? (
          menu.slice(3).map((item) => (
            <NavLink to={item.name} key={item.id} className='nav-item'>{item.name}</NavLink>
          ))
        ) : (
          <>
          
          <NavLink className='nav-item' to='/BLOG'>BLOG</NavLink> 
          <NavLink className='nav-item' onClick={handleOnclick}>Disconnected</NavLink>
         </>
          
          
        )}
      </div>
    </nav>
   

    </header>
  )

};



export default Header;
