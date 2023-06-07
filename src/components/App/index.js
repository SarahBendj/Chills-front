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
import Appointement from "../Appointement";
import RequiredAuth from "../RequireAuth";
import { Routes, Route } from "react-router-dom";

import axios from "../../Axios/axios"
import "./styles.scss";

// == API END POINT
const TECHNIC_URL = "technics";
const SERVICES_URL = "services";
const EXTRA_URL = "extras";
const DISCOUNT_URL = "discounts";
const BODY_ZONE_URL = "bodyzones";
const MENU_URL = "headers"
const APPOINTEMENT_URL = "appointements";
// == Composant
function App() {
  const [menu, setMenu] = useState([]);
  const [services, setServices] = useState([]);
  const [extra, setExtra] = useState([]);
  const [technic, setTechnic] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [ bodyZone ,setBodyZOne ] = useState([]);
  // condition of displaying one service
  const [isOne, setIsOne] = useState(false);

 
  useEffect(async ()=> {
    try {
      const response = await axios.get(MENU_URL , 
        { headers : {  "Content-Type": "application/infos"}
      });
        setMenu(response.data)
    }catch(err){
      console.error(err)
    } 
  } , [])
  useEffect(async ()=> {
    try {
      const response = await axios.get(SERVICES_URL , 
        { headers : {  "Content-Type": "application/infos"}
      });
        setServices(response.data)
    }catch(err){
      console.error(err)
    } 
  } , [])
  useEffect(async ()=> {
    try {
      const response = await axios.get(DISCOUNT_URL , 
        { headers : {  "Content-Type": "application/infos"}
      });
        setDiscount(response.data)
    }catch(err){
      console.error(err)
    } 
  } , [])
  useEffect(async ()=> {
    try {
      const response = await axios.get(TECHNIC_URL , 
        { headers : {  "Content-Type": "application/infos"}
      });
        setTechnic(response.data)
    }catch(err){
      console.error(err)
    } 
  } , [])
  useEffect(async ()=> {
      try {
        const response = await axios.get(EXTRA_URL , 
          { headers : {  "Content-Type": "application/infos"}
        });
          setExtra(response.data)
      }catch(err){
        console.error(err)
      } 
    } , [])
  useEffect(async ()=> {
    try {
      const response = await axios.get(BODY_ZONE_URL , 
        { headers : {  "Content-Type": "application/infos"}
      });
        setBodyZOne(response.data)
    }catch(err){
      console.error(err)
    }
    

  }, [])
 

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
         <Route path="/services" element={
         <Services services={services} bodyZone={bodyZone}
          isOne={isOne} setIsOne={setIsOne}
           technic={technic} />} />
         {
          services.map((service) => ( 
            <Route 
                key={service.id} 
                path={`/services/${service.name}`} 
                element={ < Service {...service} isOne={true}  bodyZone={bodyZone} technic={technic}/>}/>

          ))       
          }
       
        <Route
          path="/appointement"
          element={
            <Appointement
              extra={extra}
              discount={discount}
              technic={technic}
              bodyZone={bodyZone}
              services={services}
              
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
