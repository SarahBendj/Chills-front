import { useState, useEffect, useContext } from "react";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Link , Navigate, Location, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
// import axios from '../../Axios/axios';
import Input from "../UI/Input/Input";
import Button from "../UI/Input/Button";
import './style.scss';
import axios from "axios"

const LOGIN_URL = 'users/login';


const Login = () => {

  const { auth, login, logout  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/tr';
  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState('');
  const [ errMsg, setErrMsg] = useState(false);

  const notyf = new Notyf({
    duration :2000,
    position:{
      x:'right',
      y: 'top',
      
    },
    dismissible : true
  });

  useEffect(() => {
    setErrMsg('');
}, [email , password])

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:3000/users/login',
        { email,password}
        , {
          headers: {
            'Content-Type': 'application/json',
            /*'Authorization': 'Bearer ' + user.token,*/
          }
        })
        .then((response) => {
          const { token } = response.data
          notyf.success('Login success');
         console.log(token)
         auth({
          token
         })
        })
        .catch(error => {
          console.error(error)
        })
      }
    
    
  //   try {
  //     const response = await axios.post('http://localhost:3000/users/login',
  //       { email,password},
  //       {
  //       headers : {' Content-Type' : 'application/json'},
  //       withCredentials: true
  //       }
  //       );
  //       console.log((response?.data))

  //       const accessToken = response?.data?.accessToken
  //       // const roles = response?.data?.role
  //      /* setAuth({ email ,password,accessToken})*/
  //      console.log(accessToken)
  //      login({ token: accessToken})
  //       // setAuth({email, password,token: accessToken})

  //       notyf.success('Login success');
  //       navigate(from , {replace : true});
       
  //    }catch(err) {
  //     if(!err?.response){
  //       setErrMsg('No server Response')
  //       console.error(err)
  //       notyf.error('Email or Password incorrect');
  //     } 
  // }

  

  return (

    <div className="login">
      <form  onSubmit={handleOnSubmit} className="login-form">
        <Input 
         type='email' name='truc' placeholder='marie@gmail.com' 
         onChange={( value )=> setEmail(value )}
         value={email}
         label='Email'
         validation={{
          isRequired:true,
          minLenght:2,
          type:'string'
         }}
         />
        <Input 
        value={password} 
        placeholder='Pass889#!' 
        type='password' 
        label='Password'
        name='password'
        onChange={(value) => setPassword(value)}      
           validation={{
          isRequired:true,
          minLenght:2,
          type:'string',
         }}/>
             

     
      <div className="login-submit">

           <Link to="/resetPassword">Mot de passe oublié ?</Link>
           <Button type="submit">Submit </Button>

           </div>
           </form>
          
         
     </div>
     
  );
};

export default Login;
