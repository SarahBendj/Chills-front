import { useState, useEffect} from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { Link, useNavigate,useLocation} from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Input from "../UI/Input/Input";
import Button from "../UI/Input/Button";
import "./style.scss";
import axios from "../../Axios/axios";

const LOGIN_URL = "users/login";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  //*TODO GET TO THE PREVIOUS PAGE IF HISTORY EXISTS
  const from = location.state?.from?.pathname || "/services";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err , setErrMsg ] = useState('')

//*NOTIFICATION BLOC
  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: "right",
      y: "top",
    },
    dismissible: true,
  });

  //*API DATA FETCHING
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(
        LOGIN_URL,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { token } = response.data;
        notyf.success("Login success");
        //*STORE THE TOKEN PASS IT THROUGH CONTEXT TO GET ACCESS
        login(token);
        navigate('/')
       // navigate(from ,{replace:true});
      })
      .catch((error) => {
        console.error(error);
        notyf.error("Password or Email incorrect ,please try again");
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleOnSubmit} className="login-form">
        <Input
          type="email"
          name="truc"
          placeholder="marie@gmail.com"
          onChange={(value) => setEmail(value)}
          value={email}
          label="Email"
          validation={{
            isRequired: true,
            minLenght: 2,
            type: "string",
          }}
        />
        <Input
          value={password}
          placeholder="Pass889#!"
          type="password"
          label="Password"
          name="password"
          onChange={(value) => setPassword(value)}
          validation={{
            isRequired: true,
            minLenght: 2,
            type: "string",
          }}
        />

        <div className="login-submit">
          <Link to="/resetPassword">Mot de passe oublié ?</Link>
          <Button type="submit">Submit </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
