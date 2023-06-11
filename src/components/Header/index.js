import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import Profile from '../Profile';
import './style.scss';

const Header = ({menu}) => {

  const { auth , logout } = useAuth();
  const isAuthetificated  = auth?.token

  const handleLogout= () => {
    logout();
  };
  

  return (
    <header>
    <nav>
    
      <div className='navLeft'>
        {menu.slice(0, 3).map((item) => (
          <NavLink to={item.name} key={item.id} className='nav-item'>
            {item.name}
          </NavLink>
        ))}
        <NavLink to="/" className='nav-item' > CHILLS CENTER</NavLink>
      </div>
      <div className='navRight'>
        {isAuthetificated  ? (
          <>
            <NavLink className='nav-item' onClick={handleLogout}>
              Disconnected
            </NavLink>
          </>
        ) : (
          <>
            {menu.slice(3).map((item) => (
              <NavLink to={item.name} key={item.id} className='nav-item'>
                {item.name}
              </NavLink>
            ))}
          </>
        )}
      </div>
    </nav>
  </header>
);
};


export default Header;
