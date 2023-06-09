import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "../UI/Input/Input";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import Button from "../UI/Input/Button";
import axios from "../../Axios/axios";
import "./style.scss";

const SIGN_URL = "users/sign";

const index = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: "right",
      y: "top",
    },
    dismissible: true,
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        SIGN_URL,
        {
          firstname,
          lastname,
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      notyf.success("You're successfully registred ");
      navigate('/login');
      
    } catch (error) {
      console.error(error);
      notyf.error("signing failed");
    }
  };


  return (
    <div>
      <form onSubmit={handleOnSubmit} className="sign">
        <Input
          type="string"
          name="truc"
          placeholder="Mcnight"
          onChange={(value) => setLastname(value)}
          value={lastname}
          label="Lastname"
          validation={{
            isRequired: true,
            minLenght: 2,
            type: "string",
          }}
        />

        <Input
          type="string"
          name="truc"
          placeholder="Marry"
          onChange={(value) => setFirstname(value)}
          value={firstname}
          label="Firstname"
          validation={{
            isRequired: true,
            minLenght: 2,
            type: "string",
          }}
        />

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
          type="password"
          name="truc"
          placeholder="Pass889#!"
          onChange={(value) => setPassword(value)}
          value={password}
          label="Password"
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

export default index;
