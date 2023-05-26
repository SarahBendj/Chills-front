import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputText from "../UI/Input/InputText";
import Button from "../UI/Input/Button";
import './style.scss';



const Login = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState('');


  const handleOnSubmit = (e)=> {
    e.preventDefault();
    axios.post('http://localhost:3000/login', {
      email: email,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
        /*'Authorization': 'Bearer ' + user.token,*/
      }
    })
    .then((response) => {
      login({
        token: response.data.token,
      });
    })
    .catch(error => {
      console.error(error)
    })
  
  }
  const handleOnChange= (e)=> {
    e.preventDefault

  }
  return (

    <div className="login">
      <form className="login-form">
        <InputText value='identificant' type='text' label='truc' name='truc' placeholder='marie@gmail.com' 
         onChange={handleOnChange}
         validation={{
          isRequired:true,
          minLenght:2,
          type:'string'
         }}
         />
        <InputText value='identificant' type='text' label='truc' name='truc' placeholder='marie@gmail.com' 
         onChange={handleOnChange}
         validation={{
          isRequired:true,
          minLenght:2,
          type:'string',
         }}/>
             

      </form>
      <div className="login-submit">

           <Link to="/resetPassword">Mot de passe oublié ?</Link>
           <Button type="submit">Submit </Button>

           </div>
   
         
     </div>
     
  );
};

export default Login;
