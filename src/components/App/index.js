// == Import
import useAuth from '../Hook/useAuth';
import Header from "../Header";
import WelcomePage from "../WelcomePage";
import Logo_Brand from "../Logo_Brand";
import About from "../About";
import Login from "../Login";
import Sign from "../Sign";
import Footer from "../Footer";
import LostPage from '../LostPage'
import Services from "../Services";
import Service from "../Services/Service"
import Appointement from "../Appointement";
import RequiredAuth from "../RequireAuth";
import Profile from "../Profile";
//* STATIC PAGES
import Testimonials from "../Testimonials";
import Stats from "../Stats";
import Products from "../Products";


//NPM + STYLE
import { useEffect, useState } from "react";
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
  //== condition of displaying one service
  const [isOne, setIsOne] = useState(false);

  //* ==AUTHETIFICATION BLOC
  const { auth } = useAuth();
  const resizeDashboard = auth?.token? 'RESIZE' :'';

 // == API DATA
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
    <>
    <Profile />
    <div className={`app ${resizeDashboard}`}>
      <Header menu={menu} />
      
      {/* <Logo_Brand /> */}

      <Routes>
         {/*Public routes  */}
         <Route path="/" element={
  <>
    <WelcomePage />
    <About />
    <Services services={services} bodyZone={bodyZone} isOne={isOne} setIsOne={setIsOne} technic={technic} />
    < Products />
    <Testimonials />
    < Stats /> 

    
  </>
} />

        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
         
        
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

         {/* PROTECTED ROUTES */}
         <Route element={<RequiredAuth />}>
          
            <Route path="/main" element={<About />} />
            <Route path="/blog"  element='un blog de pub / effets des services/témoignage/ discount ticket'></Route>      
            </Route>

        <Route path="*" element={<LostPage />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}


// == Export
export default App;
