import {NavLink} from 'react-router-dom'
import useAuth from '../Hook/useAuth';
import './style.scss';
import '../App/styles.scss';
import jwt_decode from "jwt-decode";

const Profile = () => {

  const { auth } = useAuth();
  const {token} = auth
  // const  USER = jwt_decode(token);
 
  return (
    <div className={token ? 'profile-wrapper' : 'hidden'}>s
      <div className='profile'>
    
      {/* <div className='profile-text'>{USER.firstname}</div> */}
      <div className='profile-text'>points</div>
      <NavLink className='profile-text-link' to="/Appointement/##">Appointements</NavLink>
      <NavLink className='profile-text-link'to="/profilOf##">Profile</NavLink>
   
     </div>
    </div>
  );
};

export default Profile;
