// == Import
import { useEffect, useState } from "react";

import Header from "../Header";
import Logo_Brand from "../Logo_Brand";
import Main from "../Main";
import Login from "../Login";
import Sign from "../Sign";
import Footer from "../Footer";
import LostPage from '../LostPage'
import Services from "../Services";
import Service from "../Services/Service"
import RequiredAuth from "../RequireAuth";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import "./styles.scss";
import DetailService from "../Services/DetailService";
// == API END POINT
const base_API = "http://localhost:3000/";
// == Composant
function App() {
  const [menu, setMenu] = useState([]);
  const [services, setServices] = useState([]);
  const [extra, setExtra] = useState([]);
  const [technic, setTechnic] = useState([]);
  const [discount, setDiscount] = useState([]);
  // condition of displaying one service
  const [isOne, setIsOne] = useState(false);

 

  useEffect(() => {
    axios
      .get(`${base_API}services/images`, {
        headers: {
          "Content-Type": "application/infos",
        },
      })
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.log(error, "erreur");
      });
  });
  useEffect(() => {
    axios
      .get(`${base_API}extras`, {
        headers: {
          "Content-Type": "application/infos",
        },
      })
      .then((response) => {
        setExtra(response.data);
      })
      .catch((error) => {
        console.log(error, "erreur");
      });
  });
  useEffect(() => {
    axios
      .get(`${base_API}technics`, {
        headers: {
          "Content-Type": "application/infos",
        },
      })
      .then((response) => {
        setTechnic(response.data);
      })
      .catch((error) => {
        console.log(error, "erreur");
      });
  });
  useEffect(() => {
    axios
      .get(`${base_API}headers`, {
        headers: {
          "Content-Type": "application/infos",
        },
      })
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        console.log(error, "erreur");
      });
  });
 

  return (
    <div className="app">
      <Header menu={menu} />
      <Logo_Brand />

      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
         
         {/*Public routes  */}
        <Route path="/main" element={<Main />} />
        {/* <Route element={ <RequiredAuth /> }> */}
       
        {/* </Route> */}
         <Route path="/services" element={<Services services={services} isOne={isOne} setIsOne={setIsOne}  />} />
         {
          services.map((service) => ( 
            <Route 
                key={service.id} 
                path={`/services/${service.name}`} 
                element={ < Service {...service} isOne={isOne} />}/>

          ))       
          }
       
        <Route
          path="/appointement"
          element={
            <DetailService
              extra={extra}
              discount={discount}
              technic={technic}
            />
            
          }
        />
        <Route path="*" element={<LostPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
